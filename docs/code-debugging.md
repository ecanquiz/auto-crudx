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

- `fn`: [Herramientas Funcionales (JSON)](./autocrudx-tools/functional-tools.html).
- `tableMaster`: Nombre de la tabla maestro.
- `tableStructure`: Estructura de la tabla maestro.
- `tableDetailOfMaster`: Tablas detalles del mMaestro (si las hubiera).
- `tableMasterForeignKeysAssoc`: Tablas asociativas del maestro (si las hubiera).
- `tableStructureClean`: Estructura de la tabla maestro sin los campos `created_at`, `updated_at` y `deleted_at`.



## Ejemplo Básico (JSON de la tabla)
```json
{
  // omitted for brevity ...
  tableMaster: 'countries',
  tableStructure: [
    {
      column_name: 'id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: "nextval('countries_id_seq'::regclass)"
    },
    {
      column_name: 'name',
      data_type: 'character varying',
      character_maximum_length: 50,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'deleted_at',
      data_type: 'timestamp without time zone',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    },
    {
      column_name: 'created_at',
      data_type: 'timestamp without time zone',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    },
    {
      column_name: 'updated_at',
      data_type: 'timestamp without time zone',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    }
  ],
  tableDetailsOfMaster: [],
  tableForeignKeysAssoc: [],
  tableStructureClean: [
    {
      column_name: 'id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: "nextval('countries_id_seq'::regclass)"
    },
    {
      column_name: 'name',
      data_type: 'character varying',
      character_maximum_length: 50,
      is_nullable: 'NO',
      column_default: null
    }
  ]
}
[nodemon] clean exit - waiting for changes before restart
```

## Ejemplo Intermedio (configuración)
```sh
# omitted for brevity ...
CRUD_TABLE_MASTER=people
CRUD_TABLE_MASTER_IS_HELPER=FALSE
# omitted for brevity ...
CRUD_GENERATE=FALSE
```

## Ejemplo Intermedio (JSON de la tabla)

[información general ](./code-debugging.html#informacion-general) y [JSON con herramientas funcionales](./autocrudx-tools/functional-tools.html)


```sh
  // omitted for brevity ...
  tableMaster: 'people',
  tableStructure: [
    {
      column_name: 'id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: "nextval('people_id_seq'::regclass)"
    },
    {
      column_name: 'email',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'type',
      data_type: 'boolean',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'identification_card',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'business_name',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'phone',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'country_id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'domicile',
      data_type: 'text',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'deleted_at',
      data_type: 'timestamp without time zone',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    },
    {
      column_name: 'created_at',
      data_type: 'timestamp without time zone',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    },
    {
      column_name: 'updated_at',
      data_type: 'timestamp without time zone',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    }
  ],
  tableDetailsOfMaster: [],
  tableForeignKeysAssoc: [
    {
      column_name: 'country_id',
      foreign_table_name: 'countries',
      foreign_column_name: 'id',
      constraint_name: 'people_country_id_foreign',
      table_schema: 'public'
    }
  ],
  tableStructureClean: [
    {
      column_name: 'id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: "nextval('people_id_seq'::regclass)"
    },
    {
      column_name: 'email',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'type',
      data_type: 'boolean',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'identification_card',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'business_name',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'phone',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'country_id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'domicile',
      data_type: 'text',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    }
  ]
}
[nodemon] clean exit - waiting for changes before restart
```

## Ejemplo Avanzado (configuración)
```sh
# omitted for brevity ...
CRUD_TABLE_MASTER=meetings
CRUD_TABLE_MASTER_IS_HELPER=FALSE
# omitted for brevity ...
CRUD_GENERATE=FALSE
```

## Ejemplo Avanzado (JSON de la tabla)

[información general ](./code-debugging.html#informacion-general) y [JSON con herramientas funcionales](./code-debugging.html#herramientas-funcionales-json)

```json
{
  // omitted for brevity ...
  tableMaster: 'meetings',
  tableStructure: [
    {
      column_name: 'id',
      data_type: 'integer',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: "nextval('meetings_id_seq'::regclass)"
    },
    {
      column_name: 'country_id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'place',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'subject',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'reason',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'observation',
      data_type: 'text',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    },
    {
      column_name: 'deleted_at',
      data_type: 'timestamp without time zone',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    },
    {
      column_name: 'created_at',
      data_type: 'timestamp without time zone',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    },
    {
      column_name: 'updated_at',
      data_type: 'timestamp without time zone',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    }
  ],
  tableDetailsOfMaster: [
    {
      idForeignKey: 'meeting_id',
      tableName: 'attendes',
      tableStructure: [Array],
      tableForeignKeysAssoc: [Array]
    },
    {
      idForeignKey: 'meeting_id',
      tableName: 'approaches',
      tableStructure: [Array],
      tableForeignKeysAssoc: []
    },
    {
      idForeignKey: 'meeting_id',
      tableName: 'agreements',
      tableStructure: [Array],
      tableForeignKeysAssoc: []
    }
  ],
  tableForeignKeysAssoc: [
    {
      column_name: 'country_id',
      foreign_table_name: 'countries',
      foreign_column_name: 'id',
      constraint_name: 'meetings_country_id_foreign',
      table_schema: 'public'
    }
  ],
  tableStructureClean: [
    {
      column_name: 'id',
      data_type: 'integer',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: "nextval('meetings_id_seq'::regclass)"
    },
    {
      column_name: 'country_id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'place',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'subject',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'reason',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'observation',
      data_type: 'text',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    }
  ]
}
[nodemon] clean exit - waiting for changes before restart
```
