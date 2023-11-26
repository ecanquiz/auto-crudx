# Proceso

>Una vez declaradas las [renderizaciones](./renderings.html) establecemos el proceso.

## Archivo `process.ts`

En el archivo `./stack/my-backend/process.ts` declaremos el proceso para generar el renderizado del **Backend**.


`./stack/my-backend/process.ts`
```ts
import config from '@config/index'
import { rendering } from 'autocrudx-tools'
import type {
  ParamsAll,
  tableDetailsOfMasterCustomized
} from 'autocrudx-tools';

export default async (
  paramsOmitOutput: Omit<ParamsAll, 'output'>
): Promise<void> => {
  const backend = (
    await import(`@stack/${config.crud.stackBackend}/renderings`)
  ).default
  const params: ParamsAll = {
    ...paramsOmitOutput,
    output: config.pathBackend,
    moduleName: config.moduleName,
    pathUser: config.pathUser
  }
  if (params.tableDetailsOfMaster.length!==0) {
    params.tableDetailsOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailsCurrent: (
          table as unknown as tableDetailsOfMasterCustomized
        )
      }
      rendering(backend.detailController(paramsWhitDetail))
      rendering(backend.detailModel(paramsWhitDetail))
      rendering(backend.detailRoute(paramsWhitDetail))
    })
  }
  rendering(backend.masterController(params))
  rendering(backend.masterModel(params))
  rendering(backend.masterRoute(params))
}
```

- Tome en cuenta que empezamos importamos el `config` de nuestro programa, la función `rendering` del módulo `autocrudx-tools` más el tipado `ParamsAll` y `tableDetailsOfMasterCustomized` del mismo módulo.

- Tenga presente que el módulo `proccess` exporta una función `async` que devuelve una `Promise<void>`. Dicha función recibe un argumento llamado `paramsOmitOutput` tipo `Omit<ParamsAll, 'output'>` como parametro.

- Lo primero que hace la función `proccess` es importar dinámicamente el módulo [`renderings.ts`](./renderings.html) estableciéndolo en la constante `backend`.

- Lo segundo que hace la función `proccess` es declarar la constante `params` para agrupar todos los parametros necesarios para el proceso en sí.

- A continuación, el proceso se divide en 2 partes: 
    1. La condición si se cumple que `params.tableDetailsOfMaster.length` es diferente de cero (`0`).
    2. Más el resto del proceso.

- Preste atención que para renderizar cualquier plantilla basta con ejecutar la función `rendering`, perteneciente al módulo `autocrudx-tools`, pasándole como argumento cualquiera de las funciones importadas dinámicamente desde el módulo `renderings` del correspondiente **_Stack_**.

Algo como esto:

```ts
rendering(myStackName.fooTemplateName(params))
rendering(myStackName.barTemplateName(params))
rendering(myStackName.bazTemplateName(params))
```

En el ejemplo anterior `myStackName` sería algo como la constante `backend` declarada aguas arriba. En el próximo ejemplo note que esta constante no se llamará `backend` sino `frontend`. Usted puede colocarle en nombre que desee, ya que la forma no es relevante.


`./stack/frontend-folder-name/process.ts`
```ts
import config from '@config/index'
import { rendering } from 'autocrudx-tools'
import type {
  ParamsAll,
  tableDetailsOfMasterCustomized
} from 'autocrudx-tools';

export default async (
  paramsOmitOutput: Omit<ParamsAll, 'output'>
): Promise<void> => {
  const frontend = (
    await import(`@stack/${config.crud.stackFrontend}/renderings`)
  ).default
  const params: ParamsAll = {
    ...paramsOmitOutput,
    output: config.pathFrontend,
    moduleName: config.moduleName,
    pathUser: config.pathUser
  }
  if (params.tableDetailsOfMaster.length!==0){
    rendering(frontend.tabs(params))
    rendering(frontend.masterTab(params))
    rendering(frontend.masterUseTab(params))
    params.tableDetailsOfMaster.forEach(function(table){
      const paramsWhitDetail = {
        ...params,
        tableDetailsCurrent: (
          table as unknown as tableDetailsOfMasterCustomized
        )
      }     
      rendering(frontend.detailTab(paramsWhitDetail))
      rendering(frontend.detailUseTab(paramsWhitDetail))      
      rendering(frontend.detailServices(paramsWhitDetail))
      rendering(frontend.detailTypes(paramsWhitDetail))      
    })
  } 
  rendering(frontend.masterRoutes(params))
  rendering(frontend.masterDatagrid(params))
  rendering(frontend.masterUseDatagrid(params))
  rendering(frontend.masterServices(params))
  rendering(frontend.masterTypes(params))
}
```

Siéntase libre de colocarle el nombre que desee, con tal y cumpla con su tipado correspondiente.

```ts{8,9,10,11,12,13}
type Rendering = {
    outputFile: string;
    outputPath: string;
    params: ParamsAll;
    template: string;
}

const rendering: ({
  outputFile,
  outputPath,
  params,
  template
}: Rendering) => void
```

- Finalmente, tenga claro que para renderizar todas las `tableDetailsOfMaster`, cuando las hay, es decir: si se cumple que  `(params.tableDetailsOfMaster.length!==0)`, simplemente recorremos el correspondiente arreglo con el método `forEach` de JavaScript.

```ts{2}
// omitted for brevity ...
params.tableDetailsOfMaster.forEach(function(table){
  const paramsWhitDetail = {
    ...params,
    tableDetailsCurrent: (
      table as unknown as tableDetailsOfMasterCustomized
    )
  }
  rendering(myStackName.fooTemplateName(paramsWhitDetail))
  rendering(myStackName.barTemplateName(paramsWhitDetail))
  // omitted for brevity ...     
})
// omitted for brevity ...
```

Tome en cuenta cuando recorra el arreglo `params.tableDetailsOfMaster`, que por cada `tableDetailsCurrent` se creará una constante llamada `paramsWhitDetail` para ser pasada como argumento respectivamente.
