# Empezando

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://web.dev/learn/pwa/getting-started/)
:::

>_Si desea crear una Aplicación Web Progresiva, es posible que se pregunte por dónde empezar, si es posible actualizar un sitio web a una PWA sin empezar desde cero o cómo pasar de una aplicación específica de una plataforma a una PWA. Este artículo le ayudará a responder estas preguntas._

## Primeros Pasos 

Las Aplicaciones Web Progresivas siguen siendo sitios web con funciones y capacidades mejoradas. No están vinculados a una pila de tecnología en particular y puede comenzar desde cero con un sitio nuevo o actualizar su sitio web existente sin una revisión completa. En esta guía aprenderá a crear una buena implementación del patrón PWA. Aquí hay algunas estrategias para comenzar:

## Hazlo instalable

¡Empieza pequeño! Este enfoque incluye comenzar con un archivo de manifiesto básico, una página sin conexión simple y un trabajador de servicio para servir la página sin conexión y almacenar en caché algunos CSS y JavaScript críticos. Gracias al almacenamiento en caché crítico de CSS y JavaScript, tendrá su aplicación web existente lista para funcionar sin conexión mientras mejora su rendimiento.

## Centrarse en una característica

Elija una característica nueva, como notificaciones automáticas o manejo de archivos, que tendrá un impacto significativo en sus usuarios o su negocio. Esto le permitirá sumergirse en el grupo de PWA sin realizar demasiados cambios a la vez.

## Construye una versión simple

Tome una sección existente de su aplicación o un recorrido de usuario específico, como la reproducción de video o el acceso a una tarjeta de embarque, y hágalo funcionar _front-to-back_ como una PWA _offline-first_, ya sea de _stand-alone_ o en contexto. Esto permite realizar un experimento de bajo riesgo que le permite repensar la experiencia de sus usuarios con PWA.

## Empezar desde cero

Si está rediseñando su sitio web o puede comenzar desde cero, esta estrategia tiene mucho sentido. Le permite incorporar patrones de diseño de PWA más fácilmente que otras estrategias, en particular permitiéndole aprovechar todo el poder de los _service workers_ desde el principio.

## Actualización de una _store app_

Con la capacidad de publicar una PWA en tiendas de aplicaciones, es posible empaquetar su PWA en un iniciador de PWA y cargarla en tiendas, como Play Store de Google o Windows Store. Si ya tiene una aplicación específica de la plataforma, puede reemplazarla con su PWA publicada en la tienda.

Con este enfoque, sus usuarios existentes obtienen una actualización de sus experiencias con la PWA, y los nuevos usuarios aún pueden usar o instalar su PWA desde el navegador o las tiendas de aplicaciones. Y tendrás una aplicación para todos, ahorrando costos, tiempo y mejorando la experiencia del usuario.

## Lista de verificación de PWA

Una Aplicación Web Progresiva es un sitio web, lo que lleva a la pregunta: ¿Cuándo se convierte en una Aplicación Web Progresiva? La respuesta no es tan simple, ya que el concepto PWA no se refiere a una tecnología o pila específica, sino que PWA es un patrón que incluye varios componentes técnicos.

Si bien no existen reglas únicas para todos los navegadores, existe un conjunto de recomendaciones, llamado [Lista de Verificación de Aplicaciones Web Progresivas](https://web.dev/pwa-checklist/), para ayudarlo a crear una PWA que encantará a los usuarios.

## Requisitos básicos

Debido a que las PWA abarcan todos los dispositivos, desde dispositivos móviles hasta computadoras de escritorio, la lista de verificación principal de Aplicaciones Web Progresivas trata sobre lo que debe hacer para que su aplicación sea instalable y confiable para todos los usuarios, independientemente del tamaño de la pantalla o el tipo de entrada.

Los requisitos básicos son:

- **Comienza rápido, se mantiene rápido**

    El rendimiento juega un papel importante en el éxito de cualquier experiencia en línea, ya que los sitios de alto rendimiento atraen y retienen a los usuarios mejor que los de bajo rendimiento. Los sitios deben centrarse en optimizar las métricas de rendimiento centradas en el usuario.

- **Funciona en cualquier navegador**

    Las aplicaciones Web Progresivas son primero aplicaciones web, lo que significa que deben funcionar en todos los navegadores, no solo en uno de ellos. Sin embargo, la experiencia no tiene por qué ser idéntica en todos los navegadores. Puede haber funciones que no sean compatibles con un navegador, con un respaldo para garantizar una buena experiencia.
    
- **Responsivo a cualquier tamaño de pantalla**

    Los usuarios pueden usar su PWA en cualquier tamaño de pantalla y todo el contenido está disponible en cualquier tamaño de ventana gráfica.

- **Proporciona una página sin conexión personalizada**

    Cuando los usuarios están desconectados, mantenerlos en su PWA proporciona una experiencia más fluida y nativa que volver a la página sin conexión predeterminada del navegador.

- **Es instalable**

    Los usuarios que instalan o agregan aplicaciones a sus pantallas de inicio tienden a interactuar más con esas aplicaciones y, cuando se instala la PWA, puede aprovechar más capacidades para una mejor experiencia de usuario.
    
## Características óptimas de PWA

Para crear una Aplicación Web Progresiva realmente excelente, una que se sienta como la mejor aplicación de su clase, necesita algo más que la lista de verificación básica. La lista de verificación óptima de la Aplicación Web Progresiva consiste en hacer que su PWA se sienta capaz y confiable mientras aprovecha lo que hace que la web sea poderosa.

**Proporciona una experiencia fuera de línea**

Al permitir que los usuarios usen su PWA sin conexión, creará una experiencia auténtica similar a una aplicación para ellos. Para ello, identifica aquellas funciones que no requieren conectividad, de modo que los usuarios puedan acceder al menos a algunas funciones.


:::tip Problemas
Cuando decimos que la PWA debe proporcionar una experiencia sin conexión, no significa que todos los servicios y contenidos deban estar disponibles sin conexión. Por ejemplo, una aplicación para tomar notas no puede sincronizar sus notas cuando no hay conectividad, pero puede permitir a los usuarios escribir la nota y sincronizar nuevos cambios cuando vuelvan a estar en línea. Como mínimo, deberías mostrar la interfaz de usuario de la aplicación con un mensaje adecuado si tu aplicación necesita una conexión activa.
:::

**Es totalmente accesible**

Asegúrese de que los lectores de pantalla entiendan todo el contenido y las interacciones de la aplicación, que se puedan utilizar con solo un teclado, que el enfoque esté indicado y que el contraste de color sea fuerte. Al hacer que su PWA sea accesible, se asegura de que sea utilizable por todos.

**Utiliza potentes capacidades cuando estén disponibles**

Desde mensajería push, WASM y WebGL hasta acceso al sistema de archivos, selectores de contactos e integración con _app stores_. Las herramientas para crear PWA altamente capaces y profundamente integradas están aquí, lo que le permite crear una experiencia de usuario con todas las funciones, anteriormente reservada para aplicaciones de plataforma, que sus usuarios pueden llevar consigo dondequiera que vayan.

**Se puede descubrir mediante la búsqueda**

Más de la mitad de todo el tráfico del sitio web proviene de búsquedas orgánicas. Asegurarse de que existan URL canónicas para el contenido y que los motores de búsqueda puedan indexar su sitio es fundamental para que los usuarios encuentren su PWA.

**Funciona con cualquier tipo de entrada**

Los usuarios deberían poder cambiar entre tipos de entrada mientras usan su aplicación sin problemas, y los métodos de entrada no deberían depender del tamaño de la pantalla.

**Proporciona contexto para solicitudes de permiso**

Active únicamente solicitudes de permisos como notificaciones, geolocalización y credenciales, después de proporcionar una justificación en contexto para mejorar las posibilidades de aceptar las solicitudes del usuario.

**Sigue las mejores prácticas para un código saludable**

Mantener su aplicación actualizada y su código base en buen estado le facilita ofrecer nuevas funciones que cumplan con los demás objetivos establecidos en esta lista de verificación.

:::info
Si bien la lista de verificación de PWA tiene un conjunto de mejores prácticas para todos los desarrolladores, algunos navegadores también tienen _Criterios_ de PWA. Los criterios de PWA son un conjunto de requisitos técnicos que su sitio web debe cumplir para ser tratado como una PWA. Su PWA recibirá un tratamiento especial cuando eso suceda, como activar nuevos eventos, mostrar una insignia o cuadro de diálogo de instalación o agregar un nuevo menú de instalación dentro del navegador.
:::
