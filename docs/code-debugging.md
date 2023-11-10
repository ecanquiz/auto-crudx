# Depurar Código

>Para crear nuestro **Generador AutoCRUD** muchas veces necesitaremos revisar, por `console.log`, los datos que estamos manejando. 

Si entra y revisa el archivo [`src/app.ts`](/app-ts-file.html) podrá observar un **_callback_** con un `dataJSON` como parámetro que retorna un `console.log` con un `dataJSON` como argumento. 

📃`src/app.ts`
```ts
// omitted for brevity ...
  dataJSON => console.log(dataJSON)
// omitted for brevity ...
```

Con ello podemos revisar, los datos que estamos manejando.


## Ejemplo Básico (configuración)

Para revisar los datos que estamos manejando, debemos avisarle antes a `autocrudx-tools` que en ese momento no queremos generar ningún **CRUD** porque solo queremos consultar los datos. Esto se hace a través de la configuración, estableciendo `CRUD_GENERATE` en `FALSE`.


```sh{5}
# omitted for brevity ...
CRUD_TABLE_MASTER=countries
CRUD_TABLE_MASTER_IS_HELPER=TRUE
# omitted for brevity ...
CRUD_GENERATE=FALSE
```

Con esta configuración, si ejecutamos `nodemon dist/app.js` en nuestra línea de comando de la terminal inmediatamente debería aparecer un cuadro informativo y un JSON con todos los datos que necesitamos de la tabla de la base de datos a la cual le estamos generando, además de algunas herramientas útiles. Separemos esta información en tres secciones:

- Información General
- Herramientas Funcionales
- Datos de la tabla de la base de datos

## Información General

```sh{8,9,10,11,12,13,14,15,16,17}
myusername@mypc:~/node-auto-crudx$ nodemon dist/app.js
[nodemon] 3.0.1
[nodemon] to restart at any time, enter `rs`
[nodemon] watching path(s): *.*
[nodemon] watching extensions: js,mjs,cjs,json
[nodemon] starting `node dist/app.js`
Connected!
┌─────────┬──────────────┬───────────────────────────────┬──────────────────────────────────────────┐
│ (index) │      0       │               1               │                    2                     │
├─────────┼──────────────┼───────────────────────────────┼──────────────────────────────────────────┤
│    0    │ 'customData' │             'fn'              │             'customData.fn'              │
│    1    │ 'customData' │         'tableMaster'         │         'customData.tableMaster'         │
│    2    │ 'customData' │       'tableStructure'        │       'customData.tableStructure'        │
│    3    │ 'customData' │     'tableDetailOfMaster'     │     'customData.tableDetailOfMaster'     │
│    4    │ 'customData' │ 'tableMasterForeignKeysAssoc' │ 'customData.tableMasterForeignKeysAssoc' │
│    5    │ 'customData' │     'tableStructureClean'     │     'customData.tableStructureClean'     │
└─────────┴──────────────┴───────────────────────────────┴──────────────────────────────────────────┘
```

Tenga en cuenta que `dataJSON` es un objeto denominado `customData` que tiene como propiedades:

- [Las Herramientas Funcionales (JSON)](./autocrudx-tools/functional-tools.html).
- [La Información de Tablas](./autocrudx-tools/table-information.html).
