# Herramientas Funcionales

>Al aplicar la configuración del [depurador de código](../code-debugging.html) se mostrarán en pantalla las herramientas funcionales que brinda `autocrudx-tools`.
```sh
# omitted for brevity ...
CRUD_GENERATE=FALSE
```

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
      noIdAndExcludeFields: [Function: noIdAndExcludeFields]
    }
  },
  // omitted for brevity ...
```

## `fn.addCommaToArr`

>Con la función `fn.addCommaToArr()` puede renderizar un arreglo separado por coma (`","`) a excepción del útimo elemento.
```ts
// function signature
const fn = {  
  addCommaToArr: (arr: any[], index: number, less?: number) => ", " | ""
  // omitted for brevity ...
}
```

Esta función recibe 3 argumentos:

1. **El arreglo que desea recorrer**.
2. **El índice actual del arreglo**.
3. **El descuento del largo del arreglo**. Este último trae cero (`0`) de manera predeterminada. Pero si excluye del arreglo campos como `id`, `created_at`, `updated_at` y `deleted_at` debe indicar la cantidad de campos excluidos para que funcione.

**Ejemplo:**

Imagine que desea recorrer el arreglo `tableStructure` para renderizar todos los nombres de sus campos (`field.column_name`). Con la instrucción `fn.addCommaToArr(tableStructure, index, 0)` indicará que no deberá colocarle la coma (`","`) al último elemento del arreglo.

`my-template-file.txt`
```txt{2}
const someStuff = [<% tableStructure.forEach(function(field, index) {
    '<%- field.column_name; %>'<%= fn.addCommaToArr(tableStructure, index, 0) -%>
});%> 
];
```

Esto genererá el siguiente renderizado.

`my-rendering-file.js`
```js{4}
const someStuff = [
    'foo',     
    'bar',     
    'baz'
];
```

Tenga en cuenta cómo en el último elemento no se colocó la coma (`","`).

## `fn.foreignTableName`

>El propósito de la función `fn.foreignTableName()` es devolver, en el caso de existir, el nombre de la actual tabla asociada a la tabla master. Dicha función recibe como primer argumento un `string` representando el `columnName` de la tabla master que se asocia a la actual tabla foranea. Y como segundo argumento un arreglo tipo `TableMasterForeignKeysAssoc` con información de todas las tablas asociadas a la tabla master.
```ts
// function signature
const fn = {
  // omitted for brevity ...
  foreignTableName: (
    columnName: string,
    tableForeignKeysAssoc: TableMasterForeignKeysAssoc[]
  ) => string | undefined
  // omitted for brevity ...
}
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



## `fn.singular`

>La función `fn.singular()` devuelve el singular de una palabra en inglés.
```ts
// function signature
const fn = {
  // omitted for brevity ...
  singular: (word: string, amount?: number | undefined) => string
  // omitted for brevity ...
}
```

## `fn.uCamelCase`

>La función `fn.uCamelCase()` devuelve una palabra en formato **_CamelCase_** empezando con la primera letra en mayúscula.
```ts
// function signature
const fn = {
  // omitted for brevity ...
  uCamelCase: (str: string) => string
  // omitted for brevity ...
}
```

**A continuación se muestra un ejemplo de `fn.singular()` y `fn.uCamelCase()` trabajando juntos.**

Siguiendo con el ejemplo de la tabla `people` imagine que está creando una plantilla para los respectivos controladores de Laravel.

`my-template-file.txt`
```txt
// omitted for brevity ...

/**
 * Update the specified resource in storage.
 */     
public function update(Update<%= fn.uCamelCase(fn.singular(tableMaster)); %>Request $request, <%= fn.uCamelCase(fn.singular(tableMaster)); %> $<%= fn.singular(tableMaster); %>): JsonResponse
{
    return Update<%= fn.uCamelCase(fn.singular(tableMaster)); %>Service::execute($request, $<%= fn.singular(tableMaster); %>);
}

// omitted for brevity ...
```

Esto genererá el siguiente renderizado.

`my-rendering-file.php`

```php
// omitted for brevity ...

/**
 * Update the specified resource in storage.
 */     
public function update(UpdatePersonRequest $request, Person $person): JsonResponse
{
    return UpdatePersonService::execute($request, $person);
}

// omitted for brevity ...
```
Tenga en cuenta que, en ingles, el singular de `people` es igual a `person`.

## `fn.v.excludeFields`

>La función `fn.v.excludeFields()` valida que el valor `column_name` (tipo `string`) pasado como argumento,  no sea `created_at`, `updated_at` ni tampoco `deleted_at`.  
```ts
// function signature
const fn = {
  // omitted for brevity ...
  excludeFields: (column_name: string) => boolean
  // omitted for brevity ...
}
```

Imagine que desea establecer en el modelo los campos `fillable`.

`my-template-file.txt`
```txt{2}
protected $fillable = [<% tableStructure.forEach(function(field, index) {
  if  (fn.v.excludeFields(field.column_name)) {%>
    '<%- field.column_name; %>'<%= fn.addCommaToArr(tableStructure, index, 0) -%>
<%}});%> 
];
```

Siguiendo con el ejemplo de la tabla `people`, este sería el resultado.

`my-rendering-file.php`
```php
protected $fillable = [
    'id',     
    'email',     
    'type',     
    'identification_card',     
    'business_name',     
    'phone',     
    'country_id',     
    'domicile'     
];
```

## `fn.v.noIdAndExcludeFields`

>La función `fn.v.noIdAndExcludeFields()` valida que el valor `column_name` (tipo `string`) pasado como argumento,  no sea `created_at`, `updated_at`, `deleted_at` ni tampoco `id`.  
```ts
// function signature
const fn = {
  // omitted for brevity ...
  noIdAndExcludeFields: (column_name: string) => boolean
  // omitted for brevity ...
}
```

Imagine que desea establecer reglas de validación a los campos `fillable` pero no desea incluir el campo `id`.

`my-template-file.txt`
```txt{9}
/**
 * Get the validation rules that apply to the request.
 */
public function rules(): array
{
    return [
        <%
        tableStructure.forEach(function(field, index) {
        if  (fn.v.noIdAndExcludeFields(field.column_name)) { 
        %>"<%- field.column_name; -%>" => ["required"]<%- fn.addCommaToArr(tableStructure, index, 0); -%> 
        <%}});%>
    ];
}
```

Siguiendo con el ejemplo de la tabla `people`, este sería el resultado.

`my-rendering-file.php`
```php
/**
 * Get the validation rules that apply to the request.
 */
public function rules(): array
{
    return [
        "email" => ["required"],  
        "type" => ["required"],  
        "identification_card" => ["required"],  
        "business_name" => ["required"],  
        "phone" => ["required"],  
        "country_id" => ["required"],  
        "domicile" => ["required"]

    ];
}
```

