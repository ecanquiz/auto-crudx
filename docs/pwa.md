# Aplicaciones Web Progresivas

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://web.dev/learn/pwa/progressive-web-apps/)
:::

>_Las Aplicaciones Web Progresivas (PWA) son aplicaciones web creadas y mejoradas con API modernas para ofrecer capacidades, confiabilidad e instalación mejoradas y, al mismo tiempo, llegar a cualquier persona, en cualquier lugar y en cualquier dispositivo, todo con una única base de código._

Una aplicación web progresiva (PWA) es una aplicación web que utiliza mejoras progresivas para brindar a los usuarios una experiencia más confiable, utiliza nuevas capacidades para brindar una experiencia más integrada y se puede instalar. Y, como es una aplicación web, puede llegar a cualquier persona, en cualquier lugar y en cualquier dispositivo, todo con una única base de código. Una vez instalada, una PWA se parece a cualquier otra aplicación, específicamente:

- Tiene un ícono en la pantalla de inicio, el iniciador de aplicaciones, la plataforma de lanzamiento o el menú de inicio.
- Aparece cuando buscas aplicaciones en el dispositivo.
- Se abre en una ventana independiente, completamente separada de la interfaz de usuario del navegador.
- Tiene acceso a niveles más altos de integración con el sistema operativo, por ejemplo, manejo de URL o personalización de la barra de título.
- Funciona sin conexión.

## La plataforma web

La web es una plataforma increíble. Su combinación de universalidad en todos los dispositivos y sistemas operativos, su modelo de seguridad centrado en el usuario y el hecho de que ninguna empresa controla sus especificaciones o implementación la convierten en una plataforma poderosa para entregar software.

Combinado con la capacidad de vinculación inherente a la web, es posible buscar en ella y compartir lo que ha encontrado con cualquier persona, en cualquier lugar. Cada vez que visita un sitio web, es la última versión que implementó el editor y su experiencia con ese sitio puede ser tan temporal o permanente como desee.

Las aplicaciones web pueden llegar a cualquier persona, en cualquier lugar y en cualquier dispositivo con una única base de código. Para los desarrolladores, la web también ofrece un mecanismo de implementación transparente y sencillo. No hay necesidad de empaquetado, revisión de contenido adicional ni retrasos en las actualizaciones. Los usuarios siempre obtienen la última versión cuando visitan su aplicación. Con nuevas capacidades y técnicas, una aplicación web ahora puede permitirle interactuar o ver contenido incluso sin conexión, un obstáculo que era imposible de superar hace unos años.

## Aplicaciones específicas de la plataforma

Las aplicaciones específicas de plataforma, tanto en dispositivos móviles como de escritorio, son conocidas por ser ricas y confiables. Están siempre presentes en las pantallas de inicio, los docks y las barras de tareas. Funcionan independientemente de la conexión de red y se inician en su propia experiencia independiente. Pueden leer y escribir archivos desde el sistema de archivos local, acceder al hardware conectado mediante USB, serial o Bluetooth e interactuar con datos almacenados en sus dispositivos, como contactos y eventos del calendario. En aplicaciones específicas de la plataforma, puede tomar fotografías, reproducir canciones enumeradas en la pantalla de inicio o controlar la reproducción multimedia mientras está en otra aplicación. Estas aplicaciones se sienten como parte del dispositivo en el que se ejecutan.

:::info
En los sistemas operativos móviles modernos, las aplicaciones específicas de la plataforma se instalan principalmente desde tiendas de aplicaciones, con reglas y limitaciones sobre quién puede publicar y qué se puede publicar para sus usuarios. Estas aplicaciones generalmente se envían como un paquete grande e indivisible, y cada actualización necesita volver a empaquetarse, firmarse, aprobarse y reinstalarse en el dispositivo.
:::

Un desafío para las aplicaciones de plataformas específicas es que no son compatibles con múltiples plataformas y dispositivos, por lo que no es fácil, si es que es posible, mover una aplicación de Android a iOS o de iOS a Windows o ChromeOS sin crear una nueva aplicación desde cero.

## Trayendo lo mejor de ambos mundos

Si piensa en las aplicaciones de plataforma y las aplicaciones web en términos de capacidades y alcance, las aplicaciones de plataforma representan las mejores capacidades, mientras que las aplicaciones web representan el mejor alcance. Las Aplicaciones Web Progresivas se encuentran en la intersección de las capacidades de las aplicaciones de plataforma y el alcance de las aplicaciones web. Una aplicación web progresiva incluye funciones de ambos mundos.

|Web|Platform apps|
|-|-|
|Vinculabilidad|Capacidad sin conexión|
|Accesible por defecto|Alto rendimiento|
|Ubicuo|Integración de dispositivos|
|Fácil de implementar|Experiencia independiente|
|Fácil de actualizar|Icono instalado|
|Todos pueden publicar|Rico y confiable|

:::info
La gente tiende a pensar en las Progressive Web Apps como una aplicación que el usuario puede instalar desde un navegador en lugar de una tienda de aplicaciones. Sin embargo, una PWA puede aparecer en muchas tiendas de aplicaciones hoy en día como canal de distribución opcional, incluida Google Play Store (para Android y ChromeOS), Microsoft Store (para Windows 10 y 11) y Apple AppStore (para iOS, iPadOS y macOS). ). Para estos casos, debes seguir todas las reglas y requisitos de la tienda, pero aun así obtendrás algunas de las ventajas de una PWA.
:::

## La adopción tiene sus beneficios

Hulu, un servicio de transmisión de video en EE. UU., creó una versión de aplicación web progresiva de su experiencia para reemplazar sus aplicaciones de escritorio que tenían malas críticas de los usuarios y un uso deficiente. Como se compartió en [Google I/O 2019](https://blog.chromium.org/2019/05/google-io-2019-whats-new-with-chrome.html), un desarrollador podría investigar e implementar esta experiencia desde su aplicación web existente en dos semanas.

En cinco meses, el 96% de los usuarios de sus aplicaciones heredadas habían adoptado la PWA, con un aumento del 27% en las visitas repetidas y un aumento del 5,5% en la participación. Debido a que están en el iniciador y en las barras de tareas, es más fácil volver a las PWA que si simplemente vivieran en una pestaña.

[JD.ID](https://web.dev/jdid/), una plataforma de comercio electrónico en Indonesia que ofrece servicios de entrega para muchos productos, quería expandir su presencia en línea centrándose en el rendimiento y una experiencia sólida independiente de la red para su PWA. Con esta experiencia mejorada, aumentaron su tasa de conversión móvil general en un 53%, un 200% para los usuarios instalados, y aumentaron sus usuarios activos diarios en un 26%.
     
[Clipchamp](https://web.dev/clipchamp/) es un editor de vídeo en línea de escritorio y para navegador que permite a cualquiera contar historias que valga la pena compartir a través de vídeo. Observaron un 9% más de retención de usuarios con su PWA en comparación con los usuarios de aplicaciones de escritorio estándar y vieron cómo sus instalaciones de PWA aumentaron a una tasa del 97% cada mes en sus primeros cinco meses de lanzamiento.

[Gravit Designer](https://web.dev/gravit-designer/) de Corel Corporation es una potente herramienta de diseño vectorial de escritorio que sirve a decenas de miles de usuarios activos diariamente que exigen un software de ilustración vectorial completo, asequible y accesible. Desde que agregaron una PWA como opción de instalación para los usuarios, han observado que los usuarios de PWA son un 24% más activos, la PWA representa un 31% más de usuarios repetidos y los usuarios de PWA tienen 2,5 veces más probabilidades de comprar Gravit Designer PRO, en comparación con sus otras plataformas y opciones de instalación.

:::info
Muchas otras empresas han implementado PWA y han obtenido beneficios. Grandes empresas ya han publicado PWA en varios productos, incluidos Apple (AppStore Connect, Feedback Assistant), Microsoft (Office 365, Windows 365), Google (Duo, YouTube Music, Drive), Amazon (Luna), Facebook (Instagram Lite, Gaming).
:::

## El cambio de juego del streaming

Un gran ejemplo del poder de las Aplicaciones Web Progresivas es la industria de las plataformas de streaming, incluidos los juegos en la nube y la informática remota. Desde 2021, la mayoría de los proveedores de juegos en la nube han lanzado Aplicaciones Web Progresivas, que le permiten jugar juegos de consola desde cualquier dispositivo y solo un navegador o una instalación de PWA: iPhone, Android, iPad, computadoras portátiles, Mac o PC. Amazon Luna, Microsoft Xbox Cloud Gaming, Facebook Gaming, Google Stadia, Nvidia GeForce Now y BlueStacks X ofrecen soluciones de juegos en la nube a través del navegador como PWA. Todos brindan una excelente experiencia con un rendimiento cercano al nativo en todas las plataformas gracias a tecnologías web como WebRTC, WebAssembly y GamePad API.

## Desafíos

Habiendo cubierto las ventajas de utilizar la plataforma web para publicar PWA, también es importante ser consciente de los desafíos que puede enfrentar.

## Compatibilidad entre navegadores

Apple es una empresa crucial para el mundo multidispositivo, ya que posee iOS, iPadOS, macOS y Safari. Si bien Apple nunca ha usado el término PWA en público, ha estado respaldando las tecnologías para hacer que una PWA sea instalable y compatible sin conexión desde 2018 en Safari para iPhone y iPad.

Sin embargo, la implementación de Apple de las especificaciones de PWA omite muchas características que poseen otros navegadores, en particular los navegadores impulsados por el motor Chromium.

En el medio, también tenemos Firefox y su motor Gecko con implementaciones que incluyen más especificaciones de PWA en Android y menos capacidades de instalación en el escritorio.

Las limitaciones incluyen la falta de notificaciones automáticas, API de integración (como Web Bluetooth o WebNFC) y técnicas de promoción de instalación que ayudan a los usuarios a saber que pueden instalar el sitio web actual para obtener una experiencia de aplicación. Además, existen varios errores con funciones implementadas.

Al igual que con todo el desarrollo web, es obligatorio probar su experiencia en cada plataforma al lanzar su PWA y cuando se lanza una nueva versión importante del navegador o del sistema operativo. Siempre debe proporcionar soluciones alternativas o experiencias alternativas cuando una función no esté disponible.

## Concientización sobre las PWA

Como desarrollador de PWA, probablemente encontrará un problema de concienciación, tanto por parte del negocio como del usuario. Algunos propietarios de empresas no conocerán las PWA o tendrán ideas erróneas sobre el poder y los desafíos de las Aplicaciones Web Progresivas.

Cuando publica una PWA, su próximo desafío es garantizar que los usuarios comprendan que el sitio web se puede instalar, lo que lleva a una experiencia de aplicación instalada.

El desafío de la instalación es más importante en algunas plataformas, como iOS y iPadOS, y a veces los diseñadores de UX incluyen pantallas que explican al usuario cómo instalar la aplicación.

## Compatibilidad

Debe recordar que una aplicación web progresiva es solo una aplicación web, por lo que el contenido y los servicios se ejecutan según las especificaciones y protocolos estándar. Por lo tanto, técnicamente una PWA se ejecuta en todos los lugares donde se ejecuta la web; no necesita que la plataforma sea compatible con ninguna "especificación de PWA".

Sin embargo, cuando hablamos de PWA y compatibilidad, normalmente pensamos en las capacidades para cruzar los límites del navegador y los contextos solo en línea: instalación de íconos y soporte sin conexión.

:::info
Una PWA debería funcionar en todas partes, incluso cuando la instalación de íconos o las capacidades de soporte fuera de línea no estén disponibles. Planifique siempre su PWA para que funcione sin capacidades verificando el soporte y ofreciendo soluciones alternativas.
:::

Además de la compatibilidad con la plataforma web clásica, verifiquemos la compatibilidad con la funcionalidad básica de la aplicación, como la instalación de íconos y las capacidades sin conexión.


:::tip Datos obtenidos de StatCounter y Can I Use.
|Navegadores preparados sin conexión|Los usuarios web pueden instalar una PWA|
|-|-|    
|97%|88%|
:::

## Computadoras de escritorio y portátiles

En un mundo de dispositivos multifactor, ya resulta complicado saber qué es un dispositivo de escritorio. Aún así, al menos desde el punto de vista del sistema operativo, estos navegadores y stores son compatibles con la instalación de PWA y capacidades sin conexión:

- **Windows 10 y 11**

    Google Chrome (desde la versión 73), Microsoft Edge (desde la versión 79), Microsoft Store
    
- **Chrome OS**

    Navegador Chrome integrado (desde la versión 72), Play Store (desde la versión 85)
    
- **macOS, Linux y Windows 7 y 8.x**

    Google Chrome (desde la versión 73), Microsoft Edge

En el siguiente video, el usuario instala una PWA desde el navegador en una computadora de escritorio y luego accede a ella como cualquier otra aplicación con su ventana independiente.

<video controls>
  <source src="./assets/pwa-1.mp4">
</video>

:::warning Precaución
En el escritorio, Safari y Firefox no admiten la instalación de PWA. Admiten capacidades sin conexión, pero la experiencia siempre comenzará dentro de la interfaz de usuario del navegador. Puede aparecer en pantalla completa, pero nunca en una ventana independiente en el escritorio.
:::

## Dispositivos móviles

Hablando de teléfonos móviles y tabletas, se puede instalar una aplicación web progresiva con capacidades fuera de línea utilizando los siguientes navegadores y tiendas de aplicaciones:

- **iOS y iPadOS**

     Safari (desde iOS 11.3), AppStore (desde iOS/iPadOS 14, con algunas limitaciones), configuración móvil para distribución empresarial.
- **Androide**

     Firefox, Google Chrome, Samsung Internet, Microsoft Edge, Opera, Brave, Huawei Browser, Baidu, UCWeb, Play Store (a partir de la versión 72 con Google Chrome instalado o navegadores compatibles con TWA), Galaxy Store, iframe Managed Play para distribución empresarial.


:::warning Precaución
En iOS y iPadOS, las PWA solo se pueden instalar si el usuario utiliza Safari. Eso significa que los usuarios no instalarán PWA si usan diferentes aplicaciones de navegador, como Google Chrome, Firefox o Microsoft Edge. Tanto en Android como en iOS, los usuarios no pueden instalar PWA desde muchos navegadores integrados en la aplicación, como el navegador móvil de Facebook, Instagram, la aplicación de búsqueda de Google o Gmail.
:::

En el siguiente video, el usuario instala una PWA desde el navegador en un dispositivo móvil usando el cuadro de diálogo del navegador y también usando el menú **Add to Home screen**.

<video controls>
  <source src="./assets/pwa-2.mp4">
</video>

## Otros dispositivos

Algunos otros dispositivos pequeños admiten PWA, como consolas de juegos (Xbox con Microsoft Store) o dispositivos XR (Microsoft Hololens, planes para Oculus de Facebook). Sin embargo, el resto de dispositivos con navegador no suelen aceptar PWA, incluidos:

- Consolas de juegos
- Televisores inteligentes
- Relojes inteligentes
- Carros

Tu PWA siempre funcionará en el navegador de todos los dispositivos con sus limitaciones específicas. Esta capacidad de trabajar en muchos dispositivos le permite crear recorridos en múltiples dispositivos, donde el usuario puede iniciar una tarea en un dispositivo y completarla en otro, con datos sincronizados entre ellos, con exactamente la misma aplicación implementada.

## Recursos

- [Introducción a las Aplicaciones Web Progresivas en MDN](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps)
- [Lista de Compatibilidad de Aplicaciones Web Progresivas](https://firt.dev/notes/pwa)
- [Cómo las Aplicaciones Web Progresivas pueden impulsar el éxito empresarial](https://web.dev/drive-business-success/)
- [Las instalaciones de PWA del editor de vídeo de Clipchamp experimentan un crecimiento mensual del 97%](https://web.dev/clipchamp/)
- [Los usuarios de PWA tienen 2,5 veces más probabilidades de comprar Gravit Designer PRO](https://web.dev/gravit-designer/)
