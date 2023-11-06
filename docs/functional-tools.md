# Herramientas Funcionales (JSON)

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

## `fn.foreignTableName`:

```ts
const foreignTableName: (
  columnName: string, tableForeignKeysAssoc: TableMasterForeignKeysAssoc[]
) => string | undefined
```

```txt{16}
<form @submit.prevent="submit">
  <div class="grid lg:grid-cols-2 gap-4">
    <% tableStructure.forEach(function(field) {
    if  (!['id', 'created_at', 'updated_at', 'deleted_at'].includes(field.column_name)) {
      if (field.data_type === "character varying") {%>  <div class="block">     
        <!-- omitted for brevity ... -->
      </div>
      <%} else if ((field.data_type === "text")) {%>  <div class="block">     
        <!-- omitted for brevity ... -->
      </div>
      <%} else if ((field.data_type === "bigint")) {%>  <div class="block">     
        <AppSelect
          v-if="<%= tableForeignKeysAssoc.find(element => element.column_name === field.column_name).foreign_table_name; %>"
          :options="<%= tableForeignKeysAssoc.find(element => element.column_name === field.column_name).foreign_table_name; %>"
          v-model="form.<%= field.column_name; %>"
          label="<%= fn.uCamelCase(fn.singular(fn.foreignTableName(field.column_name, tableForeignKeysAssoc))); %>"
          :error="v$.<%= field.column_name; %>.$error ? v$.<%= field.column_name; %>.$errors[0].$message : null"
        />
      </div>
      <%} else if ((field.data_type === "boolean")) {%>  <div class="block">     
        <!-- omitted for brevity ... -->
      </div>
    <%}%>
  <%}});%></div>
  
  <!-- omitted for brevity ... -->
</form>    
```






```html{9}
<form @submit.prevent="submit">
  <div class="grid lg:grid-cols-2 gap-4">
    <!-- omitted for brevity ... -->
    <div class="block">     
      <AppSelect
        v-if="countries"
        :options="countries"
        v-model="form.country_id"
        label="Country"
        :error="v$.country_id.$error ? v$.country_id.$errors[0].$message : null"
      />
    </div>
    <!-- omitted for brevity ... -->
</form>
```




## `fn.singular`:
## `fn.uCamelCase`:
## `fn.v.excludeFields`:
## `fn.v.noId`:
## `fn.v.noIdAndExcludeFields`:
