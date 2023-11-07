# Configurar Entorno

## Archivo `.env`

En la raíz del proyecto **Auto-CRUDx**, hubique y abra siguiente archivo.

📃`.env.example`
```sh
DB_DATABASE=db_name
DB_HOST=localhost
DB_PASSWORD=12345678
DB_PORT=5432
DB_USER=postgres

PATH_USER=/home/username
PATH_BACKEND=backend-folder-name
PATH_BACKEND_ROOT=app
PATH_FRONTEND=frontend-folder-name
PATH_FRONTEND_ROOT=src
PATH_MODULE=User

CRUD_SCHEMA=public
CRUD_TABLE_MASTER=users
CRUD_TABLE_MASTER_IS_HELPER=FALSE
CRUD_EXCLUDE_FIELDS=created_at, updated_at, deleted_at
CRUD_GENERATE=TRUE
CRUD_STACK_BACKEND=demo-backend
CRUD_STACK_FRONTEND=demo-frontend
```

Cópielo y péguelo en la misma raiz del proyecto para crear el archivo de configuración del entorno `.env`. Tenga en cuenta que este archivo agrupa 3 secciones respectivamente (`DB`, `PATH` y `CRUD`) que describiremos a continuación.

## Descripción de sección `DB`

- **`DB_DATABASE`:** Nombre de la base de datos.
- **`DB_HOST`**: IP de la máquina anfitriona donde se hospeda el proyecto.
- **`DB_PASSWORD`**: _Password_ de la base de datos.
- **`DB_PORT`** : Puerto por donde escucha la base de datos.
- **`DB_USER`**: Usuario de la base de datos.

## Descripción de sección `PATH`

- **`PATH_USER`**: Ruta del usuario en la máquina anfitriona.
- **`PATH_BACKEND`**: Carpeta(s) donde está alojado el `scaffold` de su _backend_.
- **`PATH_BACKEND_ROOT`**: Nombre de la carpeta, dentro del `PATH_BACKEND`, donde se escribirá el correspondiente código generado.
- **`PATH_FRONTEND`**: Carpeta(s) donde está alojado el `scaffold` de su _frontend_.
- **`PATH_FRONTEND_ROOT`**: Nombre de la carpeta, dentro del `PATH_FRONTEND`, donde se escribirá el correspondiente código generado.
- **`PATH_MODULE`**: Si está usando estructura modular, puede suministrar el nombre del módulo.

## Descripción de sección `CRUD`

- **`CRUD_SCHEMA`**: Nombre del esquema de la base de datos donde se encuetra la tabla en cuestión.
- **`CRUD_TABLE_MASTER`**: Nombre de la tabla que se le generará el CRUD.
- **`CRUD_TABLE_MASTER_IS_HELPER`**: Indica si se trata de una simple tabla para llenar una lista desplegable (elemento select html). 
- **`CRUD_EXCLUDE_FIELDS`**: Campos que contiene la respectiva tabla que desea sean excluidos del CRUD.
- **`CRUD_GENERATE`**: Indica si desea generar el CRUD o _debuggear_ el _dataJSON_ proveniente de la base de datos que alimenta el CRUD.
- **`CRUD_STACK_BACKEND`**: Nombre de la carpeta de su [Stack para el Backend](./stack-folder.html#stack-my-backend).
- **`CRUD_STACK_FRONTEND`**: Nombre de la carpeta de su [Stack para el Frontend](/stack-folder.html#stack-my-frontend).


## Carpeta `config`

En la carpeta `config` se capturan los parámetros del archivo `.env` enviándolos a JavaScript para ser exportados. 

```txt{2}
src/
├── config/
├── stack/
└── app.ts
```

Echemos un vistazo.

```txt{4}
├── config/
    ├── crud.ts
    ├── db.ts
    ├── index.ts
    └── output.ts
```
Tenga en cuenta que hay 3 archivos (`crud.ts`, `db.ts` y `output.ts`) respectivamente más el `index.ts` quien representa la interface de los anteriores.

## `src/config/index.ts`

Tenga en cuenta lo que exporta este archivo.

📃`src/config/index.ts`
```ts{12,13,14,15,16,17,18,19,20}
import crud from './crud'
import dbConfig from './db'
import { // import * as output from './output'
    moduleName,
    pathBackend,
    pathFrontend, 
    pathModule, 
    pathUser
} from './output'

export default { //output
    crud,
    dbConfig,    
    moduleName,
    pathBackend,
    pathFrontend, 
    pathModule, 
    pathUser
}
```

Si desea obtener las variables de entorno simplemente importelas.

```ts
import {
    crud,
    dbConfig,    
    moduleName,
    pathBackend,
    pathFrontend, 
    pathModule, 
    pathUser
} from '@config/index'
```

Hagamos un simple vistazo a los otros archivos de configuración para revisar como funciona esto.

## `./src/config/db.ts`

📃
```ts
import dotenv from 'dotenv'

dotenv.config();

const dbConfig = {    
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    database: process.env.DB_DATABASE,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD    
}

export default dbConfig;
```

## `./src/config/crud.ts`
📃
```ts
import dotenv from 'dotenv'

dotenv.config();

export default {  
  schema: process.env.CRUD_SCHEMA,
  tableMaster: process.env.CRUD_TABLE_MASTER,
  tableMasterIsHelper: Boolean(JSON.parse((process.env.CRUD_TABLE_MASTER_IS_HELPER??''.toString()).toLowerCase())),
  excludeFields: process.env.CRUD_EXCLUDE_FIELDS ? process.env.CRUD_EXCLUDE_FIELDS.split(", ") : [],
  generate: Boolean(JSON.parse((process.env.CRUD_GENERATE??''.toString()).toLowerCase())),
  stackBackend: process.env.CRUD_STACK_BACKEND,
  stackFrontend: process.env.CRUD_STACK_FRONTEND
}
```

## `./src/config/output.ts`

📃
```ts
import dotenv from 'dotenv'

dotenv.config();

export const pathUser = process.env.PATH_USER
export const moduleName = process.env.PATH_MODULE
export const pathModule = moduleName ? `/${moduleName}` : ""
export const pathBackend = `${pathUser}/${process.env.PATH_BACKEND}/${process.env.PATH_BACKEND_ROOT}${pathModule}`
export const pathFrontend = `${pathUser}/${process.env.PATH_FRONTEND}/${process.env.PATH_FRONTEND_ROOT}${pathModule}`
```