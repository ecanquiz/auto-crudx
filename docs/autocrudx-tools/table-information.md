# Información de Tablas

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
