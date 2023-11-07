# Herramientas Funcionales (AutoCRUDx Tools)

Tenga en cuenta las funciones del objeto `fn` como herramientas para generar CRUDs.

```json
{
  fn: {
    addCommaToArr: [Function: addCommaToArr],    
    foreignTableName: [Function: foreignTableName],
    singular: [Function: singular],
    uCamelCase: [Function: uCamelCase],
    v: {
      excludeFields: [Function: excludeFields],
      noId: [Function: noId],
      noIdAndExcludeFields: [Function: noIdAndExcludeFields]
    }
  },
  // omitted for brevity ...
```

## `fn.addCommaToArr`

Suponga que quiere renderizar un arreglo separado por coma (`", "`) a excepción del útimo elemento. Puede hacerlo utilizando `fn.addCommaToArr`.
Esta función recibe como argumentos:

- El arreglo que desea recorrer
- El índice 
- El descuento de posiciones

`template-file.txt`
```txt{2}
const someStuff = [<% tableStructure.forEach(function(field, index) {
    '<%- field.column_name; %>'<%= fn.addCommaToArr(tableStructure, index, 0) -%>
});%> 
];
```

Tenga en cuenta cómo en el último elemento no se colocó la coma (`", "`).

`rendering-file.js`
```js{4}
const someStuff = [
    'foo',     
    'bar',     
    'baz'
];
```

## `fn.foreignTableName`

El propósito de la función `fn.foreignTableName` es devolver, en el caso de existir, el nombre de la actual tabla asociada a la tabla master. 

Dicha función recibe como primer argumento un `string` representando el `columnName` de la tabla master que se asocia a la actual tabla foranea. Y como segundo argumento un arreglo tipo `TableMasterForeignKeysAssoc` con información de todas las tablas asociadas a la tabla master.

```ts
const foreignTableName: (
  columnName: string, tableForeignKeysAssoc: TableMasterForeignKeysAssoc[]
) => string | undefined
```

Imagine el ejemplo estructural de una tabla master de nombre `people` unida internamente a través del campo `country_id` tipo `bigint` a una tabla asociativa llamada `countries` .


```json{3,4,7,8,16,18,19}
{
  // omitted for brevity ...
  tableMaster: 'people',
  tableStructure: [
    // omitted for brevity ...
    {
      column_name: 'country_id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    // omitted for brevity ... 
  ],
  // omitted for brevity ...
  tableForeignKeysAssoc: [
    {
      column_name: 'country_id',
      foreign_table_name: 'countries',
      foreign_column_name: 'id',
      constraint_name: 'people_country_id_foreign',
      table_schema: 'public'
    }
  ],
  // omitted for brevity ...
}
```

Probando un contexto de solo JavaScript seria algo como lo siguiente.

```js
tableStructure.forEach(function(field) {
  if (field.data_type === "bigint" && field.column_name !== 'id') {
    console.log(
      fn.foreignTableName(field.column_name, tableForeignKeysAssoc)
    );
  }
})

// Output: 'countries'
```

Tenga en cuenta que la función `fn.foreignTableName()` recibirá `field.column_name` como primer argumento cada vez que haga el recorrido del arreglo `tableStructure`.  Y como segundo argumento, el arreglo `tableForeignKeysAssoc`.


Volviendo a un ejemplo más contextualizado, observe las líneas resaltadas:


```txt{5,6,7,9,10,12}
<template>
  <!-- omitted for brevity ... -->
  <form @submit.prevent="submit">
    <div class="grid lg:grid-cols-2 gap-4">
      <% tableStructure.forEach(function(field) {
      if  (!['id', 'created_at', 'updated_at', 'deleted_at'].includes(field.column_name)) {
        if ((field.data_type === "bigint")) {%>  <div class="block">     
          <AppSelect
            v-if="<%= fn.foreignTableName(field.column_name, tableForeignKeysAssoc); %>"
            :options="<%= fn.foreignTableName(field.column_name, tableForeignKeysAssoc); %>"
            v-model="form.<%= field.column_name; %>"
            label="<%= fn.uCamelCase(fn.singular(fn.foreignTableName(field.column_name, tableForeignKeysAssoc))); %>"
            :error="v$.<%= field.column_name; %>.$error ? v$.<%= field.column_name; %>.$errors[0].$message : null"
          />
        </div>
        <%}%>          
    <%}});%>
    </div>
    <!-- omitted for brevity ... -->
  </form>
  <!-- omitted for brevity ... -->
</template>   
```

La plantilla anterior generará un código como el siguiente:

```vue{7,8,10}
<template>
  <!-- omitted for brevity ... -->
  <form @submit.prevent="submit">
    <div class="grid lg:grid-cols-2 gap-4">
      <div class="block">     
        <AppSelect
          v-if="countries"
          :options="countries"
          v-model="form.country_id"
          label="Country"
          :error="v$.country_id.$error ? v$.country_id.$errors[0].$message : null"
        />
      </div>
    </div>
    <!-- omitted for brevity ... -->
  </form>
  <!-- omitted for brevity ... -->
</template>
```
Una vez que se posee el nombre de la tabla asociativa `"countries"` basta con envolverla entre las funciones `fn.uCamelCase(fn.singular("..."))` para que devuelva `Country`.



## `fn.singular`:
## `fn.uCamelCase`:
## `fn.v.excludeFields`:
## `fn.v.noId`:
## `fn.v.noIdAndExcludeFields`:
