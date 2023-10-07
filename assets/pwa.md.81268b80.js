import{_ as e,o as a,c as i,S as o}from"./chunks/framework.0335e7b7.js";const s="/learn-pwa/assets/pwa-1.947a03ac.mp4",n="/learn-pwa/assets/pwa-2.7415c22e.mp4",f=JSON.parse('{"title":"Aplicaciones Web Progresivas","description":"","frontmatter":{},"headers":[],"relativePath":"pwa.md","filePath":"pwa.md"}'),r={name:"pwa.md"},l=o('<h1 id="aplicaciones-web-progresivas" tabindex="-1">Aplicaciones Web Progresivas <a class="header-anchor" href="#aplicaciones-web-progresivas" aria-label="Permalink to &quot;Aplicaciones Web Progresivas&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>La fuente original (en ingles) de este tutorial se encuentra <a href="https://web.dev/learn/pwa/progressive-web-apps/" target="_blank" rel="noreferrer">aquí</a></p></div><blockquote><p><em>Las aplicaciones web progresivas (PWA) son aplicaciones web creadas y mejoradas con API modernas para ofrecer capacidades, confiabilidad e instalación mejoradas y, al mismo tiempo, llegar a cualquier persona, en cualquier lugar y en cualquier dispositivo, todo con una única base de código.</em></p></blockquote><p>Una aplicación web progresiva (PWA) es una aplicación web que utiliza mejoras progresivas para brindar a los usuarios una experiencia más confiable, utiliza nuevas capacidades para brindar una experiencia más integrada y se puede instalar. Y, como es una aplicación web, puede llegar a cualquier persona, en cualquier lugar y en cualquier dispositivo, todo con una única base de código. Una vez instalada, una PWA se parece a cualquier otra aplicación, específicamente:</p><ul><li>Tiene un ícono en la pantalla de inicio, el iniciador de aplicaciones, la plataforma de lanzamiento o el menú de inicio.</li><li>Aparece cuando buscas aplicaciones en el dispositivo.</li><li>Se abre en una ventana independiente, completamente separada de la interfaz de usuario del navegador.</li><li>Tiene acceso a niveles más altos de integración con el sistema operativo, por ejemplo, manejo de URL o personalización de la barra de título.</li><li>Funciona sin conexión.</li></ul><h2 id="la-plataforma-web" tabindex="-1">La plataforma web <a class="header-anchor" href="#la-plataforma-web" aria-label="Permalink to &quot;La plataforma web&quot;">​</a></h2><p>La web es una plataforma increíble. Su combinación de universalidad en todos los dispositivos y sistemas operativos, su modelo de seguridad centrado en el usuario y el hecho de que ninguna empresa controla sus especificaciones o implementación la convierten en una plataforma poderosa para entregar software.</p><p>Combinado con la capacidad de vinculación inherente a la web, es posible buscar en ella y compartir lo que ha encontrado con cualquier persona, en cualquier lugar. Cada vez que visita un sitio web, es la última versión que implementó el editor y su experiencia con ese sitio puede ser tan temporal o permanente como desee.</p><p>Las aplicaciones web pueden llegar a cualquier persona, en cualquier lugar y en cualquier dispositivo con una única base de código. Para los desarrolladores, la web también ofrece un mecanismo de implementación transparente y sencillo. No hay necesidad de empaquetado, revisión de contenido adicional ni retrasos en las actualizaciones. Los usuarios siempre obtienen la última versión cuando visitan su aplicación. Con nuevas capacidades y técnicas, una aplicación web ahora puede permitirle interactuar o ver contenido incluso sin conexión, un obstáculo que era imposible de superar hace unos años.</p><h2 id="aplicaciones-especificas-de-la-plataforma" tabindex="-1">Aplicaciones específicas de la plataforma <a class="header-anchor" href="#aplicaciones-especificas-de-la-plataforma" aria-label="Permalink to &quot;Aplicaciones específicas de la plataforma&quot;">​</a></h2><p>Las aplicaciones específicas de plataforma, tanto en dispositivos móviles como de escritorio, son conocidas por ser ricas y confiables. Están siempre presentes en las pantallas de inicio, los docks y las barras de tareas. Funcionan independientemente de la conexión de red y se inician en su propia experiencia independiente. Pueden leer y escribir archivos desde el sistema de archivos local, acceder al hardware conectado mediante USB, serial o Bluetooth e interactuar con datos almacenados en sus dispositivos, como contactos y eventos del calendario. En aplicaciones específicas de la plataforma, puede tomar fotografías, reproducir canciones enumeradas en la pantalla de inicio o controlar la reproducción multimedia mientras está en otra aplicación. Estas aplicaciones se sienten como parte del dispositivo en el que se ejecutan.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>En los sistemas operativos móviles modernos, las aplicaciones específicas de la plataforma se instalan principalmente desde tiendas de aplicaciones, con reglas y limitaciones sobre quién puede publicar y qué se puede publicar para sus usuarios. Estas aplicaciones generalmente se envían como un paquete grande e indivisible, y cada actualización necesita volver a empaquetarse, firmarse, aprobarse y reinstalarse en el dispositivo.</p></div><p>Un desafío para las aplicaciones de plataformas específicas es que no son compatibles con múltiples plataformas y dispositivos, por lo que no es fácil, si es que es posible, mover una aplicación de Android a iOS o de iOS a Windows o ChromeOS sin crear una nueva aplicación desde cero.</p><h2 id="trayendo-lo-mejor-de-ambos-mundos" tabindex="-1">Trayendo lo mejor de ambos mundos <a class="header-anchor" href="#trayendo-lo-mejor-de-ambos-mundos" aria-label="Permalink to &quot;Trayendo lo mejor de ambos mundos&quot;">​</a></h2><p>Si piensa en las aplicaciones de plataforma y las aplicaciones web en términos de capacidades y alcance, las aplicaciones de plataforma representan las mejores capacidades, mientras que las aplicaciones web representan el mejor alcance. Las aplicaciones web progresivas se encuentran en la intersección de las capacidades de las aplicaciones de plataforma y el alcance de las aplicaciones web. Una aplicación web progresiva incluye funciones de ambos mundos.</p><table><thead><tr><th>Web</th><th>Platform apps</th></tr></thead><tbody><tr><td>Vinculabilidad</td><td>Capacidad sin conexión</td></tr><tr><td>Accesible por defecto</td><td>Alto rendimiento</td></tr><tr><td>Ubicuo</td><td>Integración de dispositivos</td></tr><tr><td>Fácil de implementar</td><td>Experiencia independiente</td></tr><tr><td>Fácil de actualizar</td><td>Icono instalado</td></tr><tr><td>Todos pueden publicar</td><td>Rico y confiable</td></tr></tbody></table><div class="info custom-block"><p class="custom-block-title">INFO</p><p>La gente tiende a pensar en las Progressive Web Apps como una aplicación que el usuario puede instalar desde un navegador en lugar de una tienda de aplicaciones. Sin embargo, una PWA puede aparecer en muchas tiendas de aplicaciones hoy en día como canal de distribución opcional, incluida Google Play Store (para Android y ChromeOS), Microsoft Store (para Windows 10 y 11) y Apple AppStore (para iOS, iPadOS y macOS). ). Para estos casos, debes seguir todas las reglas y requisitos de la tienda, pero aun así obtendrás algunas de las ventajas de una PWA.</p></div><h2 id="la-adopcion-tiene-sus-beneficios" tabindex="-1">La adopción tiene sus beneficios <a class="header-anchor" href="#la-adopcion-tiene-sus-beneficios" aria-label="Permalink to &quot;La adopción tiene sus beneficios&quot;">​</a></h2><p>Hulu, un servicio de transmisión de video en EE. UU., creó una versión de aplicación web progresiva de su experiencia para reemplazar sus aplicaciones de escritorio que tenían malas críticas de los usuarios y un uso deficiente. Como se compartió en <a href="https://blog.chromium.org/2019/05/google-io-2019-whats-new-with-chrome.html" target="_blank" rel="noreferrer">Google I/O 2019</a>, un desarrollador podría investigar e implementar esta experiencia desde su aplicación web existente en dos semanas.</p><p>En cinco meses, el 96% de los usuarios de sus aplicaciones heredadas habían adoptado la PWA, con un aumento del 27% en las visitas repetidas y un aumento del 5,5% en la participación. Debido a que están en el iniciador y en las barras de tareas, es más fácil volver a las PWA que si simplemente vivieran en una pestaña.</p><p><a href="https://web.dev/jdid/" target="_blank" rel="noreferrer">JD.ID</a>, una plataforma de comercio electrónico en Indonesia que ofrece servicios de entrega para muchos productos, quería expandir su presencia en línea centrándose en el rendimiento y una experiencia sólida independiente de la red para su PWA. Con esta experiencia mejorada, aumentaron su tasa de conversión móvil general en un 53%, un 200% para los usuarios instalados, y aumentaron sus usuarios activos diarios en un 26%.</p><p><a href="https://web.dev/clipchamp/" target="_blank" rel="noreferrer">Clipchamp</a> es un editor de vídeo en línea de escritorio y para navegador que permite a cualquiera contar historias que valga la pena compartir a través de vídeo. Observaron un 9% más de retención de usuarios con su PWA en comparación con los usuarios de aplicaciones de escritorio estándar y vieron cómo sus instalaciones de PWA aumentaron a una tasa del 97% cada mes en sus primeros cinco meses de lanzamiento.</p><p><a href="https://web.dev/gravit-designer/" target="_blank" rel="noreferrer">Gravit Designer</a> de Corel Corporation es una potente herramienta de diseño vectorial de escritorio que sirve a decenas de miles de usuarios activos diariamente que exigen un software de ilustración vectorial completo, asequible y accesible. Desde que agregaron una PWA como opción de instalación para los usuarios, han observado que los usuarios de PWA son un 24% más activos, la PWA representa un 31% más de usuarios repetidos y los usuarios de PWA tienen 2,5 veces más probabilidades de comprar Gravit Designer PRO, en comparación con sus otras plataformas y opciones de instalación.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Muchas otras empresas han implementado PWA y han obtenido beneficios. Grandes empresas ya han publicado PWA en varios productos, incluidos Apple (AppStore Connect, Feedback Assistant), Microsoft (Office 365, Windows 365), Google (Duo, YouTube Music, Drive), Amazon (Luna), Facebook (Instagram Lite, Gaming).</p></div><h2 id="el-cambio-de-juego-del-streaming" tabindex="-1">El cambio de juego del streaming <a class="header-anchor" href="#el-cambio-de-juego-del-streaming" aria-label="Permalink to &quot;El cambio de juego del streaming&quot;">​</a></h2><p>Un gran ejemplo del poder de las aplicaciones web progresivas es la industria de las plataformas de streaming, incluidos los juegos en la nube y la informática remota. Desde 2021, la mayoría de los proveedores de juegos en la nube han lanzado aplicaciones web progresivas, que le permiten jugar juegos de consola desde cualquier dispositivo y solo un navegador o una instalación de PWA: iPhone, Android, iPad, computadoras portátiles, Mac o PC. Amazon Luna, Microsoft Xbox Cloud Gaming, Facebook Gaming, Google Stadia, Nvidia GeForce Now y BlueStacks X ofrecen soluciones de juegos en la nube a través del navegador como PWA. Todos brindan una excelente experiencia con un rendimiento cercano al nativo en todas las plataformas gracias a tecnologías web como WebRTC, WebAssembly y GamePad API.</p><h2 id="desafios" tabindex="-1">Desafíos <a class="header-anchor" href="#desafios" aria-label="Permalink to &quot;Desafíos&quot;">​</a></h2><p>Habiendo cubierto las ventajas de utilizar la plataforma web para publicar PWA, también es importante ser consciente de los desafíos que puede enfrentar.</p><h2 id="compatibilidad-entre-navegadores" tabindex="-1">Compatibilidad entre navegadores <a class="header-anchor" href="#compatibilidad-entre-navegadores" aria-label="Permalink to &quot;Compatibilidad entre navegadores&quot;">​</a></h2><p>Apple es una empresa crucial para el mundo multidispositivo, ya que posee iOS, iPadOS, macOS y Safari. Si bien Apple nunca ha usado el término PWA en público, ha estado respaldando las tecnologías para hacer que una PWA sea instalable y compatible sin conexión desde 2018 en Safari para iPhone y iPad.</p><p>Sin embargo, la implementación de Apple de las especificaciones de PWA omite muchas características que poseen otros navegadores, en particular los navegadores impulsados por el motor Chromium.</p><p>En el medio, también tenemos Firefox y su motor Gecko con implementaciones que incluyen más especificaciones de PWA en Android y menos capacidades de instalación en el escritorio.</p><p>Las limitaciones incluyen la falta de notificaciones automáticas, API de integración (como Web Bluetooth o WebNFC) y técnicas de promoción de instalación que ayudan a los usuarios a saber que pueden instalar el sitio web actual para obtener una experiencia de aplicación. Además, existen varios errores con funciones implementadas.</p><p>Al igual que con todo el desarrollo web, es obligatorio probar su experiencia en cada plataforma al lanzar su PWA y cuando se lanza una nueva versión importante del navegador o del sistema operativo. Siempre debe proporcionar soluciones alternativas o experiencias alternativas cuando una función no esté disponible.</p><h2 id="concientizacion-sobre-las-pwa" tabindex="-1">Concientización sobre las PWA <a class="header-anchor" href="#concientizacion-sobre-las-pwa" aria-label="Permalink to &quot;Concientización sobre las PWA&quot;">​</a></h2><p>Como desarrollador de PWA, probablemente encontrará un problema de concienciación, tanto por parte del negocio como del usuario. Algunos propietarios de empresas no conocerán las PWA o tendrán ideas erróneas sobre el poder y los desafíos de las aplicaciones web progresivas.</p><p>Cuando publica una PWA, su próximo desafío es garantizar que los usuarios comprendan que el sitio web se puede instalar, lo que lleva a una experiencia de aplicación instalada.</p><p>El desafío de la instalación es más importante en algunas plataformas, como iOS y iPadOS, y a veces los diseñadores de UX incluyen pantallas que explican al usuario cómo instalar la aplicación.</p><h2 id="compatibilidad" tabindex="-1">Compatibilidad <a class="header-anchor" href="#compatibilidad" aria-label="Permalink to &quot;Compatibilidad&quot;">​</a></h2><p>Debe recordar que una aplicación web progresiva es solo una aplicación web, por lo que el contenido y los servicios se ejecutan según las especificaciones y protocolos estándar. Por lo tanto, técnicamente una PWA se ejecuta en todos los lugares donde se ejecuta la web; no necesita que la plataforma sea compatible con ninguna &quot;especificación de PWA&quot;.</p><p>Sin embargo, cuando hablamos de PWA y compatibilidad, normalmente pensamos en las capacidades para cruzar los límites del navegador y los contextos solo en línea: instalación de íconos y soporte sin conexión.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Una PWA debería funcionar en todas partes, incluso cuando la instalación de íconos o las capacidades de soporte fuera de línea no estén disponibles. Planifique siempre su PWA para que funcione sin capacidades verificando el soporte y ofreciendo soluciones alternativas.</p></div><p>Además de la compatibilidad con la plataforma web clásica, verifiquemos la compatibilidad con la funcionalidad básica de la aplicación, como la instalación de íconos y las capacidades sin conexión.</p><div class="tip custom-block"><p class="custom-block-title">Datos obtenidos de StatCounter y Can I Use.</p><table><thead><tr><th>Navegadores preparados sin conexión</th><th>Los usuarios web pueden instalar una PWA</th></tr></thead><tbody><tr><td>97%</td><td>88%</td></tr></tbody></table></div><h2 id="computadoras-de-escritorio-y-portatiles" tabindex="-1">Computadoras de escritorio y portátiles <a class="header-anchor" href="#computadoras-de-escritorio-y-portatiles" aria-label="Permalink to &quot;Computadoras de escritorio y portátiles&quot;">​</a></h2><p>En un mundo de dispositivos multifactor, ya resulta complicado saber qué es un dispositivo de escritorio. Aún así, al menos desde el punto de vista del sistema operativo, estos navegadores y stores son compatibles con la instalación de PWA y capacidades sin conexión:</p><ul><li><p><strong>Windows 10 y 11</strong></p><p>Google Chrome (desde la versión 73), Microsoft Edge (desde la versión 79), Microsoft Store</p></li><li><p><strong>Chrome OS</strong></p><p>Navegador Chrome integrado (desde la versión 72), Play Store (desde la versión 85)</p></li><li><p><strong>macOS, Linux y Windows 7 y 8.x</strong></p><p>Google Chrome (desde la versión 73), Microsoft Edge</p></li></ul><p>En el siguiente video, el usuario instala una PWA desde el navegador en una computadora de escritorio y luego accede a ella como cualquier otra aplicación con su ventana independiente.</p><video controls><source src="'+s+'"></video><div class="warning custom-block"><p class="custom-block-title">Precaución</p><p>En el escritorio, Safari y Firefox no admiten la instalación de PWA. Admiten capacidades sin conexión, pero la experiencia siempre comenzará dentro de la interfaz de usuario del navegador. Puede aparecer en pantalla completa, pero nunca en una ventana independiente en el escritorio.</p></div><h2 id="dispositivos-moviles" tabindex="-1">Dispositivos móviles <a class="header-anchor" href="#dispositivos-moviles" aria-label="Permalink to &quot;Dispositivos móviles&quot;">​</a></h2><p>Hablando de teléfonos móviles y tabletas, se puede instalar una aplicación web progresiva con capacidades fuera de línea utilizando los siguientes navegadores y tiendas de aplicaciones:</p><ul><li><p><strong>iOS y iPadOS</strong></p><p>Safari (desde iOS 11.3), AppStore (desde iOS/iPadOS 14, con algunas limitaciones), configuración móvil para distribución empresarial.</p></li><li><p><strong>Androide</strong></p><p>Firefox, Google Chrome, Samsung Internet, Microsoft Edge, Opera, Brave, Huawei Browser, Baidu, UCWeb, Play Store (a partir de la versión 72 con Google Chrome instalado o navegadores compatibles con TWA), Galaxy Store, iframe Managed Play para distribución empresarial.</p></li></ul><div class="warning custom-block"><p class="custom-block-title">Precaución</p><p>En iOS y iPadOS, las PWA solo se pueden instalar si el usuario utiliza Safari. Eso significa que los usuarios no instalarán PWA si usan diferentes aplicaciones de navegador, como Google Chrome, Firefox o Microsoft Edge. Tanto en Android como en iOS, los usuarios no pueden instalar PWA desde muchos navegadores integrados en la aplicación, como el navegador móvil de Facebook, Instagram, la aplicación de búsqueda de Google o Gmail.</p></div><p>En el siguiente video, el usuario instala una PWA desde el navegador en un dispositivo móvil usando el cuadro de diálogo del navegador y también usando el menú <strong>Add to Home screen</strong>.</p><video controls><source src="'+n+'"></video><h2 id="otros-dispositivos" tabindex="-1">Otros dispositivos <a class="header-anchor" href="#otros-dispositivos" aria-label="Permalink to &quot;Otros dispositivos&quot;">​</a></h2><p>Algunos otros dispositivos pequeños admiten PWA, como consolas de juegos (Xbox con Microsoft Store) o dispositivos XR (Microsoft Hololens, planes para Oculus de Facebook). Sin embargo, el resto de dispositivos con navegador no suelen aceptar PWA, incluidos:</p><ul><li>Consolas de juegos</li><li>Televisores inteligentes</li><li>Relojes inteligentes</li><li>Carros</li></ul><p>Tu PWA siempre funcionará en el navegador de todos los dispositivos con sus limitaciones específicas. Esta capacidad de trabajar en muchos dispositivos le permite crear recorridos en múltiples dispositivos, donde el usuario puede iniciar una tarea en un dispositivo y completarla en otro, con datos sincronizados entre ellos, con exactamente la misma aplicación implementada.</p><h2 id="recursos" tabindex="-1">Recursos <a class="header-anchor" href="#recursos" aria-label="Permalink to &quot;Recursos&quot;">​</a></h2><ul><li><a href="https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps" target="_blank" rel="noreferrer">Introducción a las Aplicaciones Web Progresivas en MDN</a></li><li><a href="https://firt.dev/notes/pwa" target="_blank" rel="noreferrer">Lista de Compatibilidad de Aplicaciones Web Progresivas</a></li><li><a href="https://web.dev/drive-business-success/" target="_blank" rel="noreferrer">Cómo las Aplicaciones Web Progresivas pueden impulsar el éxito empresarial</a></li><li><a href="https://web.dev/clipchamp/" target="_blank" rel="noreferrer">Las instalaciones de PWA del editor de vídeo de Clipchamp experimentan un crecimiento mensual del 97%</a></li><li><a href="https://web.dev/gravit-designer/" target="_blank" rel="noreferrer">Los usuarios de PWA tienen 2,5 veces más probabilidades de comprar Gravit Designer PRO</a></li></ul>',62),t=[l];function c(d,p,u,m,b,v){return a(),i("div",null,t)}const h=e(r,[["render",c]]);export{f as __pageData,h as default};
