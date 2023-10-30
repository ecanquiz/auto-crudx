# Carpeta `config`

:::tip
Antes de esplicar lo referente a la carpeta `config` preparemos nuestro archivo `.env`.
:::


## Archivo `.env`

En la raíz de su proyecto **Auto-CRUDx** habrá un archivo `.env.example` como el siguiente.

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

Copie y pegue en la raiz del proyecto este archivo `.env.example` como base para crear su archivo de configuración `.env`.

## Descripción de `.env`

- **`DB_DATABASE`:** Nombre de la base de datos.
- **`DB_HOST`**: IP de la máquina anfitriona donde se hospeda el proyecto.
- **`DB_PASSWORD`**: _Password_ de la base de datos.
- **`DB_PORT`** : Puerto por donde escucha la base de datos.
- **`DB_USER`**: Usuario de la base de datos.

---

- **`PATH_USER`**: Ruta del usuario en la máquina anfitriona. Ejemplo: `/home/johndoe`.
- **`PATH_BACKEND`**: Carpeta(s) donde está alojado el `scaffold` de su _backend_. Ejemplo: `/dev-env/my-backend-proyect`.
- **`PATH_BACKEND_ROOT`**: Nombre de la carpeta, dentro del `PATH_BACKEND`, donde se escribirá el correspondiente código generado.
- **`PATH_FRONTEND`**: Carpeta(s) donde está alojado el `scaffold` de su _frontend_. Ejemplo: `/dev-env/my-frontend-proyect`.
- **`PATH_FRONTEND_ROOT`**: Nombre de la carpeta, dentro del `PATH_FRONTEND`, donde se escribirá el correspondiente código generado.
- **`PATH_MODULE`**: Si está usando estructura modular, puede suministrar el nombre del módulo.

---

- **`CRUD_SCHEMA`**: Nombre del esquema de la base de datos donde se encuetra la tabla en cuestión.
- **`CRUD_TABLE_MASTER`**: Nombre de la tabla que se le generará el CRUD.
- **`CRUD_TABLE_MASTER_IS_HELPER`**: Indica si se trata de una simple tabla para llenar una lista desplegable (elemento select html). 
- **`CRUD_EXCLUDE_FIELDS`**: Campos que contiene la respectiva tabla que desea sean excluidos del CRUD.
- **`CRUD_GENERATE`**: Indica si desea generar el CRUD o _debuggear_ el _dataJSON_ proveniente de la base de datos que alimenta el CRUD.
- **`CRUD_STACK_BACKEND`**: Nombre de la carpeta de su pila para su _backend_.
- **`CRUD_STACK_FRONTEND`**: Nombre de la carpeta de su pila para su _frontend_.


## Carpeta `config`

En la carpeta `config` establecemos los parámetros que necesitamos para que esto funcione. 

```txt{2}
src/
├── config/
├── stack/
└── app.ts
```

## Usar Variables de Entorno

Tenga en cuenta que hay 3 archivos (`crud.ts`, `db.ts` y `output.ts`) respectivamente más el `index.ts` que es la interface de los anteriores.


```txt{5}
src/
├── config/
|   ├── crud.ts
|   ├── db.ts
|   ├── index.ts
|   └── output.ts
├── stack/
└── app.ts
```

## El archivo `src/config/index.ts`

Tenga en cuenta todo lo que exporta el archivo `src/config/index.ts`.

```ts{12,13,14,15,16,17,18,19,20}
import crud from './crud'
import dbConfig from './db'
import {
    moduleName,
    pathBackend,
    pathFrontend, 
    pathModule, 
    pathUser
} from './output'
// import * as output from './output'

export default {//output
    crud,
    dbConfig,    
    moduleName,
    pathBackend,
    pathFrontend, 
    pathModule, 
    pathUser
}

```

- **`crud.schema`:** Nombre del esquema de la base de datos donde se encuetra la tabla en cuestión.
- **`crud.tableMaster`:** Nombre de la tabla que se le generará el CRUD.
- **`crud.tableMasterIsHelper`:** Indica si se trata de una simple tabla para llenar una lista desplegable (elemento select html).
- **`crud.excludeFields`:** Campos que contiene la respectiva tabla que desea sean excluidos del CRUD.
- **`crud.generate`:** Indica si desea generar el CRUD o _debuggear_ el _dataJSON_ proveniente de la base de datos que alimenta el CRUD.
- **`crud.stackBackend`:** Nombre de la carpeta de su pila para su _backend_.
- **`crud.stackFrontend`:** Nombre de la carpeta de su pila para su _frontend_.


--------------


- **`pathUser`:** Ruta del usuario en la máquina anfitriona. Ejemplo: `/home/johndoe`.
- **`moduleName`:** Nombre del módulo.
- **`pathModule`:** Ruta del módulo.
- **`pathBackend`:** Carpeta(s) donde está alojado el `scaffold` de su _backend_. Ejemplo: `/dev-env/my-backend-proyect/app`.
- **`pathFrontend`:** Carpeta(s) donde está alojado el `scaffold` de su _fronten_. Ejemplo: `/dev-env/my-fronten-proyect/src`.


------------


```ts
import {
    crud,    
    moduleName,
    pathBackend,
    pathFrontend, 
    pathModule, 
    pathUser
} from '@config/index'
```


```ts
import { crud } from '@config/index'
```
