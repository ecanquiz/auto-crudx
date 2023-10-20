# Empezar

## Instalación

https://github.com/ecanquiz/node-auto-crudx

```sh
This project was created with Node & TypeScript.
Run npm install
Run tsc --watch

Open in another terminal
Run nodemon dist/app.js
The generated code will be written in the ./output folder
```

## Estructura de carpetas

```txt{4}
src/
├── config/
├── core/
└── stack/
```

```txt{5,6}
src/
├── config/
├── core/
├── stack/
|   ├── my-backend/
|   └── my-frontend/
```

```txt{6,7,8,9,10,11,13,14,15,16,17}
src/
├── config/
├── core/
├── stack/
|   ├── my-backend/
|   |   ├── templates/
|   |   |   ├── foo
|   |   |   ├── bar
|   |   |   └── baz
|   |   ├──process.ts
|   |   └──renderings.ts
|   ├── my-frontend/
|   |   ├── templates/
|   |   |   ├── foo
|   |   |   └── bar
|   |   ├──process.ts
|   |   └──renderings.ts
```

## Configuración

:::info
Para poner en marcha **Auto-CRUDx** debe tener un archivo `.env` correctamente configurado en la raiz del proyecto.
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

## Descripción de Variables de Entorno

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

## Usar Variables de Entorno

API de core/config

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

