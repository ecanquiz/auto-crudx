# Carpeta `stack`

:::warning Advertencia
La actual versión del paquete `autocrudx-tools` está diseñada para crear `stacks` orientadas a micro-servicios. No obstante, funciona perfectamente igual al tratar con un `stack` **MVC**. 

Solo tiene que realizar algunos ajustes en el archivo `.env`. Suponga un proyecto **_Laravel MVC_**.

En vez de hacer esto:
```sh
# omitted for brevity ...
PATH_BACKEND=my-backend-folder-name
PATH_BACKEND_ROOT=app
PATH_FRONTEND=my-frontend-folder-name
PATH_FRONTEND_ROOT=src
# omitted for brevity ...
```

Haga lo siguiente:
```sh
# omitted for brevity ...
PATH_BACKEND=my-mvc-folder-name
PATH_BACKEND_ROOT=app
PATH_FRONTEND=my-mvc-folder-name
PATH_FRONTEND_ROOT=resources
# omitted for brevity ...
```
:::

---

La carpeta `stack` es el espacio indicado para construir específicamente todo lo relacionado con los CRUDs.

```txt{3}
src/
├── config/
├── stack/
└── app.ts
```

Con el propósito de mantener un mejor orden, se separa principalmente en dos carpetas.

```txt{4,5}
src/
├── config/
├── stack/
|   ├── my-backend/
|   └── my-frontend/
└── app.ts
```

## `stack/my-backend/`

Tome en cuenta que la carpeta `stack/my-backend/` posee una sub-carpeta llamada [`templates/`](./templates.html) con `N` archivos de plantillas más un archivo llamado [`process.ts`](./process.html) y otro llamado [`renderings.ts`](./renderings.html).



```txt{5,6,7,8,9,10}
src/
├── config/
├── stack/
|   ├── my-backend/
|   |   ├── templates/
|   |   |   ├── foo
|   |   |   ├── bar
|   |   |   └── baz
|   |   ├── process.ts
|   |   └── renderings.ts
|   └── my-frontend/
└── app.ts
```

## `stack/my-frontend/`

Tome en cuenta que la carpeta `stack/my-frontend/` tambien posee una sub-carpeta llamada [`templates/`](./templates.html) con `N` archivos de plantillas más un archivo llamado [`process.ts`](./process.html) y otro llamado [`renderings.ts`](./renderings.html).

```txt{6,7,8,9,10}
src/
├── config/
├── stack/
|   ├── my-backend/
|   └── my-frontend/
|       ├── templates/
|       |   ├── foo
|       |   └── bar
|       ├── process.ts
|       └── renderings.ts
└── app.ts
```

---

## Clonclusión

Tanto la carpeta `stack/my-backend/` como la carpeta `stack/my-frontend/` poseen respectivamente la misma estructura.
