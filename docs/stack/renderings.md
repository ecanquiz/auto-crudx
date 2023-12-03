# Renderizaciones

>Tanto en la carpeta `stack/my-backend/` como `stack/my-frontend/` debe haber un archivo llamado `renderings.ts` respectivamente.

```txt{5,9}
stack/
   ├── my-backend/
   |   ├── templates/
   |   ├── process.ts
   |   └── renderings.ts
   └── my-frontend/
       ├── templates/
       ├── process.ts
       └── renderings.ts
```

En el correspondiente archivo `renderings.ts` se especifica información detallada para la generación de los archivos que serán renderizados.

![renderins](../assets/renderins-1.jpg)


>El archivo `renderings.ts` exporta un objeto con información relevante de cada archivo que se genera.

📃`./stack/my-backend/renderings.ts`
```ts
import config from '@config/index'
import { singular, uCamelCase } from 'autocrudx-tools'
import type { ParamsAll, Rendering } from 'autocrudx-tools'

export default {
  masterController: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackBackend}/templates/controller`,
    outputPath: `Http/Controllers`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}Controller.php`,
    params
  }),

  masterModel: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackBackend}/templates/model`,
    outputPath: `Models`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.php`,
    params
  }),

  masterRoute: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackBackend}/templates/route`,
    outputPath: `Routes`,
    outputFile: `api${uCamelCase(singular(params.tableMaster))}.php`,
    params
  })  
}
```

>En este caso exportamos predeterminadamente un objeto con las propiedades `masterController`, `masterModel` y `masterRoute`.

Los nombres de estas propiedades son respectivamente metafóricos, siéntase libre de colocar los nombres que considere conveniente. Puede quitar o agregar propiedades según la cantidad de archivos que desea generar.

Se requiere encarecidamente mandar por cada propiedad una función **_callback_** con los siguientes argumentos:

- `template`: Representa la localización de la plantilla que se renderizará.
- `outputPath`: Especifica la ruta del directorio donde se generará el archivo renderizado.
- `outputFile`: Nombre que tendrá el archivo generado.
- `params`: Información y funciones que se utilizarán para el renderizado. Prácticamente representa al objeto [`customData`](../code-debugging.html#informacion-general).

Firma de la función **_callback_**.
```ts
(params: ParamsAll) => Rendering
```

Si desea conocer más sobre el tipado de `ParamsAll` y `Rendering` [consulte aquí](https://github.com/ecanquiz/autocrudx-tools/blob/main/src/types/rendering.ts).

---

Ahora veamos el ejemplo del lado del _frontend_:

📃`./stack/frontend-folder-name/renderings.ts`
```ts
import config from '@config/index'
import { singular, uCamelCase } from 'autocrudx-tools'
import type { ParamsAll, Rendering } from 'autocrudx-tools'

export default {
  masterDatagrid: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackFrontend}/templates/views/index`,
    outputPath: `views/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'Index.vue',
    params
  }),

  masterRoutes: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackFrontend}/templates/routes/index`,
    outputPath: `routes`,
    outputFile: `index${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  masterServices: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackFrontend}/templates/services/index`,
    outputPath: `services`,
    outputFile: `${uCamelCase(singular(params.tableMaster))}.ts`,
    params
  }),

  masterTypes: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackFrontend}/templates/types/index`,
    outputPath: `types/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: `index.ts`,
    params
  }),

  masterUseDatagrid: (params: ParamsAll): Rendering => ({
    template: `./src/stack/${config.crud.stackFrontend}/templates/composables/useIndex`,
    outputPath: `composables/${uCamelCase(singular(params.tableMaster))}`,
    outputFile: 'useIndex.ts',
    params
  })
}

```

>En este caso tenemos `masterDatagrid`, `masterRoutes`, `masterServices`, `masterTypes` y `masterUseDatagrid`.

Tenga en cuenta que en este objeto puede agregar todas las propiedades según la cantidad de archivos que desea generar. Bien puede quitar, agregar propiedades o incluso, cambiarle el nombre según corresponda a su correspondiente `stack`.

Tenga presente que también se requiere mandar por cada propiedad una función **_callback_** con los correspondientes argumentos anteriormente descritos.

