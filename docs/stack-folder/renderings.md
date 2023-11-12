# Renderizaciones

![renderins](../assets/renderins-1.jpg)

- `template`
- `outputPath`
- `outputFile`
- `params`

`./stack/backend-folder-name/renderings.ts`
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

`./stack/frontend-folder-name/renderings.ts`
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
