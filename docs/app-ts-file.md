# Archivo `app.ts`

>El archivo `src/app.ts` es el punto de entrada del programa.

```txt{4}
src/
├── config/
├── stack/
└── app.ts
```

Echemos un vistazo.

📃`app.ts`
```ts
import 'module-alias/register';
import config from '@config/index'
import { main } from 'autocrudx-tools'

main( 
  config,
  dataJSON => console.log(dataJSON)
  // This is to query what dataJSON brings
)
```

El paquete [`module-alias`](https://www.npmjs.com/package/module-alias) se usa para crear alias de directorios y registrar rutas de módulos personalizadas en NodeJS. Simplemente es para agregar orden a nuestro programa.

Luego importamos el módulo `congig` para obtener todo el [entorno de configuración](./env-config.html) del prograna y pasarlo como primer parámetro a la función `main` del módulo [`autocrudx-tools`](./autocrudx-tools/import-autocrudx-tools.html) quien será el encargado de facilitarnos las herramientas para construir nuestro **_AutoCRUD_**.

El segundo parametro es un `callback` que nos facilitará la [depuración del código](./code-debugging.html) en el proceso de construcción de los CRUDs.


