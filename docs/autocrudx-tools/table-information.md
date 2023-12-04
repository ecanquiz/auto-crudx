# Información de Tablas

>Al aplicar la configuración del [depurador de código](../code-debugging.html), `autocrudx-tools` mostrará en pantalla la información de la **_tabla_** a la cual desea generar el **_CRUD_**. 
```sh
# omitted for brevity ...
CRUD_GENERATE=FALSE
```

Tenga en cuenta lo siguiente:

- `tableMaster`: Nombre de la **_tabla maestro_**.
- `tableStructure`: Estructura de la **_tabla maestro_**.
- `tableDetailOfMaster`: **_Tabla(s) detalle(s) del maestro_**, si la(s) hubiera.
- `tableMasterForeignKeysAssoc`: **_Tabla(s) asociativa(s) del maestro_**, si la(s) hubiera.
- `tableStructureClean`: Estructura de la **_tabla maestro_** sin los campos `created_at`, `updated_at` y `deleted_at`.

>Con dicha información proveniente de la correspondiente base de datos es suficiente para construir los generadores de **_CRUDs_**.

Veamos los ejemplos...

## Ejemplo Básico

>Este ejemplo es para generar un **_CRUD_** a una **_tabla maestro_** llamada `countries`. Recuerde antes aplicar la configuración del [depurador de código](../code-debugging.html) para mostrar en pantalla la información de la tabla.
```sh
# omitted for brevity ...
CRUD_TABLE_MASTER=countries
CRUD_TABLE_MASTER_IS_HELPER=TRUE
# omitted for brevity ...
```

Inmediatamente `autocrudx-tools` leerá la información de la tabla `countries` anteriormente creada en base de datos y mostrará un JSON como el siguiente, además de la [información general ](../code-debugging.html#informacion-general) y las [herramientas funcionales](../autocrudx-tools/functional-tools.html).

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

Tenga en cuenta que para este ejemplo, `autocrudx-tools` arrojó información de los correspondientes arreglos `tableMaster`, `tableStructure` y `tableStructureClean`. Mientras que `tableDetailOfMaster` y `tableMasterForeignKeysAssoc` respectivamente son arreglos vacios.

## Ejemplo Intermedio

>Este ejemplo es para generar un **_CRUD_** a una **_tabla maestro_** llamada `people`. Recuerde antes aplicar la configuración del [depurador de código](../code-debugging.html) para mostrar en pantalla la información de la tabla.
```sh
# omitted for brevity ...
CRUD_TABLE_MASTER=people
CRUD_TABLE_MASTER_IS_HELPER=FALSE
# omitted for brevity ...
```

Inmediatamente `autocrudx-tools` leerá la información de la tabla `people` anteriormente creada en base de datos y mostrará un JSON como el siguiente, además de la [información general ](../code-debugging.html#informacion-general) y las [herramientas funcionales](../autocrudx-tools/functional-tools.html).


```json
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

Tenga en cuenta que para este ejemplo, `autocrudx-tools` arrojó información de los arreglos `tableMaster`, `tableStructure`, `tableForeignKeysAssoc` y `tableStructureClean` respectivamente. Mientras que `tableDetailOfMaster` se trata de un arreglo vacio.

## Ejemplo Avanzado

>Este ejemplo es para generar un **_CRUD_** a una **_tabla maestro_** llamada `meetings`. Recuerde antes aplicar la configuración del [depurador de código](../code-debugging.html) para mostrar en pantalla la información de la tabla.
```sh
# omitted for brevity ...
CRUD_TABLE_MASTER=meetings
CRUD_TABLE_MASTER_IS_HELPER=FALSE
# omitted for brevity ...
```

Inmediatamente `autocrudx-tools` leerá la información de la tabla `meetings` anteriormente creada en base de datos y mostrará un JSON como el siguiente, además de la [información general ](../code-debugging.html#informacion-general) y las [herramientas funcionales](../autocrudx-tools/functional-tools.html).


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

Tenga en cuenta que para este ejemplo, `autocrudx-tools` arrojó información de los arreglos `tableMaster`, `tableStructure`, `tableDetailOfMaster` `tableForeignKeysAssoc` y `tableStructureClean` respectivamente.

---

>Ahora que el arreglo `tableDetailOfMaster` tiene información, hagamos un pequeño cambio en el archivo [`app.ts`](../app-ts-file.html) para indagar al respecto.
```ts{4}
// omitted for brevity ...
main( 
  config,
  dataJSON => console.log(dataJSON.tableDetailsOfMaster)
  // for consoleLogCustom of dataJSON
)
```

Ahora `autocrudx-tools` mostrará un JSON como el siguiente.


```json
[
  {
    idForeignKey: 'meeting_id',
    tableName: 'agreements',
    tableStructure: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    tableForeignKeysAssoc: []
  },
  {
    idForeignKey: 'meeting_id',
    tableName: 'attendes',
    tableStructure: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object]
    ],
    tableForeignKeysAssoc: [ [Object], [Object], [Object] ]
  },
  {
    idForeignKey: 'meeting_id',
    tableName: 'approaches',
    tableStructure: [
      [Object], [Object],
      [Object], [Object],
      [Object], [Object],
      [Object], [Object]
    ],
    tableForeignKeysAssoc: []
  }
]
```

>Ahora que la tabla detalle `attendes`, en este caso trae toda información, mostremos un acercamiento.
```ts{4}
// omitted for brevity ...
main(
  config,
  dataJSON => console.log(dataJSON.tableDetailsOfMaster[1])
  // for consoleLogCustom of dataJSON
)
```

Ahora `autocrudx-tools` mostrará un JSON como el siguiente.

```json
{
  idForeignKey: 'meeting_id',
  tableName: 'attendes',
  tableStructure: [
    {
      column_name: 'id',
      data_type: 'integer',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: "nextval('attendes_id_seq'::regclass)"
    },
    {
      column_name: 'meeting_id',
      data_type: 'integer',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    },
    {
      column_name: 'idcard',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'fullname',
      data_type: 'character varying',
      character_maximum_length: 255,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'email',
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
      column_name: 'observation',
      data_type: 'text',
      character_maximum_length: null,
      is_nullable: 'YES',
      column_default: null
    },
    {
      column_name: 'entity_id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'dependency_id',
      data_type: 'bigint',
      character_maximum_length: null,
      is_nullable: 'NO',
      column_default: null
    },
    {
      column_name: 'position_id',
      data_type: 'bigint',
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
  tableForeignKeysAssoc: [
    {
      column_name: 'entity_id',
      foreign_table_name: 'entities',
      foreign_column_name: 'id',
      constraint_name: 'attendes_entity_id_foreign',
      table_schema: 'public'
    },
    {
      column_name: 'dependency_id',
      foreign_table_name: 'dependencies',
      foreign_column_name: 'id',
      constraint_name: 'attendes_dependency_id_foreign',
      table_schema: 'public'
    },
    {
      column_name: 'position_id',
      foreign_table_name: 'positions',
      foreign_column_name: 'id',
      constraint_name: 'attendes_position_id_foreign',
      table_schema: 'public'
    }
  ]
}
```

---

>En el momento que se conoce **cómo** trabajar con las [herramientas funcionales](./functional-tools.html) y **cómo** buscar la información de tablas, ya es tiempo de pasar a desarrollar nuestro propio **_Generador de CRUDs_** dentro de la [carpeta stack](../stack/folder.html).
