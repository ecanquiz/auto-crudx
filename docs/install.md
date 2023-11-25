# Instalación

>Este proyecto es desarrollado con [Node](https://nodejs.org/en), así que debería tenerlo previamente instalado en su computadora. Se basa en [JavaScript](https://developer.mozilla.org/en-US/docs/Web/JavaScript) y está tipado con [TypeScript](https://www.typescriptlang.org/).

:::info
El hecho de que sea desarrollado con **Node** no limita a que su propio **Generador de CRUDs** sea para cualquier otro lenguaje o framewoks. Sin embargo, aquí usted debería conocer algo de **Node** para hacerlo funcionar para usted.
:::

---

Para instalarlo en su computadora dirijase a su correspondiente [repositorio](https://github.com/ecanquiz/node-auto-crudx) y haga click en el botón que dice `Use this template`.

Una vez descargado el código, entre dentro de la carpeta del proyecto en la terminal y ejecute:

```sh
npm install
```

Ahora, para mantener la compilación mientras crea sus plantillas (para su **Generador de CRUDs**) ejecutate el siguiente comando.

```sh
tsc --watch
```

Abra otra terminal en la misma carpeta del proyecto `node-auto-crudx` para ejecutar su Generador de CRUDs.


```sh
nodemon dist/app.js
```

:::warning Advertencia
Para que su Generador de CRUDs funcione, antes debe tenerlo previamente [configurado](./env-config.html).
:::
