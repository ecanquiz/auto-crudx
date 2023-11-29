# Depurar Código

>Para crear nuestro **Generador AutoCRUD** muchas veces necesitaremos revisar, por `console.log`, los datos que estamos manejando. 

Si entra y revisa el archivo [`src/app.ts`](/app-ts-file.html) podrá observar un **_callback_** con un `dataJSON` como parámetro que retorna un `console.log` con el mismo `dataJSON` como argumento. 

📃`src/app.ts`
```ts
// omitted for brevity ...
  dataJSON => console.log(dataJSON)
// omitted for brevity ...
```

>Con ello podemos revisar, los datos que estamos manejando. Para hacerlo hay que desactivar la generación del **_CRUD_** y activar la muestra del `console.log`.

## Desactivar CRUD y activar `console.log`

Para revisar los datos que estamos manejando, debemos avisarle antes a `autocrudx-tools` que en ese momento no queremos generar ningún **_CRUD_** porque solo queremos consultar los datos. Esto se hace a través de la configuración, estableciendo `CRUD_GENERATE` en `FALSE`.


```sh
# omitted for brevity ...
CRUD_GENERATE=FALSE
```

Con esta configuración, si ejecutamos `nodemon dist/app.js` en nuestra línea de comando de la terminal inmediatamente debería aparecer un cuadro informativo y un JSON con todos los datos que necesitamos de la tabla de la base de datos a la cual le estamos generando, además de algunas herramientas útiles. Separemos esta información en tres secciones:

- [Información General](./code-debugging.html#informacion-general)
- [Las Herramientas Funcionales (JSON)](./autocrudx-tools/functional-tools.html)
- [La Información de Tablas](./autocrudx-tools/table-information.html)

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

>Tenga en cuenta que `dataJSON` es un objeto denominado `customData` que tiene como propiedades las [herramientas funcionales (JSON)](./autocrudx-tools/functional-tools.html) y la respectiva [información de tablas](./autocrudx-tools/table-information.html).
