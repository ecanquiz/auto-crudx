# Empezar (Introducción)

## ¿ Qué es un CRUD ?

En informática, [CRUD](https://en.wikipedia.org/wiki/Create,_read,_update_and_delete) es el acrónimo de _"Crear"_, _"Leer"_, _"Actualizar"_ y _"Borrar"_, (del original en inglés, _Create, Read, Update and Delete_), que se usa para referirse a las funciones básicas en bases de datos o la capa de persistencia en un software.

## ¿ Por qué Auto-CRUDx ?

Las funciones básicas en bases de datos o la capa de persistencia en un software son tareas repetitivas que se hacen regularmente cuando de desarrollo de software se trata. Por lo que, una vez definida una estructura estandar, para los típicos CRUDs, es útil una herramienta que los genere automáticamente.

## ¿ Qué es Auto-CRUDx ?

[Auto-CRUDx](https://github.com/ecanquiz/node-auto-crudx) es una herramienta que ayuda a crear su propio Generador de CRUDs Automático según su propia pila de desarrollp y arquitectura particular.

:::tip Importante
**Auto-CRUDx** brinda las herramientas para ayudarlo a crear su propio Generador de CRUDs Automático (según su propia pila de desarrollp y arquitectura particular). Por lo tanto, usted mismo debe diseñar sus plantillas según su criterio.
:::

## Ejemplos

:::warning Advertencia
***Auto-CRUDx*** no genera _Scaffold_. Por lo tanto, no genera _Layout_, _Sign In_, _Sign Up_, _Password Recovery_, etc. 
:::

Los siguientes ejemplos de CRUDs fueron creados a travéz de la herramienta ***Auto-CRUDx***, la cual fue desarrollada con [Laravel](https://laravel.com/) y [Vue](https://vuejs.org/).


:::tip Información
Usted puede consultar el código generado, tanto del [Backend](https://github.com/CaribesTIC/laravuel-api/tree/main/Modules/Meeting) como del [Frontend](https://github.com/CaribesTIC/laravuel-spa/tree/main/src/modules/Meeting), de los siguientes ejemplos. 
:::

## 1° CRUD Básico

<video controls>
  <source src="./assets/get-start-1.mp4">
</video>

## 2° CRUD Intermedio

<video controls>
  <source src="./assets/get-start-2.mp4">
</video>

## 3° CRUD Avanzado

<video controls>
  <source src="./assets/get-start-3.mp4">
</video>


## Requisitos

Auto-CRUDx está desarrollada en [Node](https://nodejs.org/), por lo que es importante tener conocimientos mínimos del mismo y tenerlo instalado en su maquina.

Además, usa como dependencia las Plantillas de JavaScript Integradas [EJS](https://www.npmjs.com/package/ejs). Por lo que también es fundamental leer la respectiva [documentación](https://ejs.co/).

La actual versión del **Auto-CRUx**, solo se alimenta de la información proveniente del diseño de sus tablas creadas en su bases de datos [PostgreSQL](https://www.postgresql.org/). Por lo que debe tener previamente instalado PostgreSQL en su máquina, así como también haber construido sus correspondientes tablas en dicha base de datos.



