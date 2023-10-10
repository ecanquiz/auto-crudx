import{_ as e,o as a,c as i,S as o}from"./chunks/framework.0335e7b7.js";const g=JSON.parse('{"title":"Empezando","description":"","frontmatter":{},"headers":[],"relativePath":"getting-started.md","filePath":"getting-started.md"}'),n={name:"getting-started.md"},s=o('<h1 id="empezando" tabindex="-1">Empezando <a class="header-anchor" href="#empezando" aria-label="Permalink to &quot;Empezando&quot;">​</a></h1><div class="info custom-block"><p class="custom-block-title">INFO</p><p>La fuente original (en ingles) de este tutorial se encuentra <a href="https://web.dev/learn/pwa/getting-started/" target="_blank" rel="noreferrer">aquí</a></p></div><blockquote><p><em>Si desea crear una Aplicación Web Progresiva, es posible que se pregunte por dónde empezar, si es posible actualizar un sitio web a una PWA sin empezar desde cero o cómo pasar de una aplicación específica de una plataforma a una PWA. Este artículo le ayudará a responder estas preguntas.</em></p></blockquote><h2 id="primeros-pasos" tabindex="-1">Primeros Pasos <a class="header-anchor" href="#primeros-pasos" aria-label="Permalink to &quot;Primeros Pasos&quot;">​</a></h2><p>Las Aplicaciones Web Progresivas siguen siendo sitios web con funciones y capacidades mejoradas. No están vinculados a una pila de tecnología en particular y puede comenzar desde cero con un sitio nuevo o actualizar su sitio web existente sin una revisión completa. En esta guía aprenderá a crear una buena implementación del patrón PWA. Aquí hay algunas estrategias para comenzar:</p><h2 id="hazlo-instalable" tabindex="-1">Hazlo instalable <a class="header-anchor" href="#hazlo-instalable" aria-label="Permalink to &quot;Hazlo instalable&quot;">​</a></h2><p>¡Empieza pequeño! Este enfoque incluye comenzar con un archivo de manifiesto básico, una página sin conexión simple y un trabajador de servicio para servir la página sin conexión y almacenar en caché algunos CSS y JavaScript críticos. Gracias al almacenamiento en caché crítico de CSS y JavaScript, tendrá su aplicación web existente lista para funcionar sin conexión mientras mejora su rendimiento.</p><h2 id="centrarse-en-una-caracteristica" tabindex="-1">Centrarse en una característica <a class="header-anchor" href="#centrarse-en-una-caracteristica" aria-label="Permalink to &quot;Centrarse en una característica&quot;">​</a></h2><p>Elija una característica nueva, como notificaciones automáticas o manejo de archivos, que tendrá un impacto significativo en sus usuarios o su negocio. Esto le permitirá sumergirse en el grupo de PWA sin realizar demasiados cambios a la vez.</p><h2 id="construye-una-version-simple" tabindex="-1">Construye una versión simple <a class="header-anchor" href="#construye-una-version-simple" aria-label="Permalink to &quot;Construye una versión simple&quot;">​</a></h2><p>Tome una sección existente de su aplicación o un recorrido de usuario específico, como la reproducción de video o el acceso a una tarjeta de embarque, y hágalo funcionar <em>front-to-back</em> como una PWA <em>offline-first</em>, ya sea de <em>stand-alone</em> o en contexto. Esto permite realizar un experimento de bajo riesgo que le permite repensar la experiencia de sus usuarios con PWA.</p><h2 id="empezar-desde-cero" tabindex="-1">Empezar desde cero <a class="header-anchor" href="#empezar-desde-cero" aria-label="Permalink to &quot;Empezar desde cero&quot;">​</a></h2><p>Si está rediseñando su sitio web o puede comenzar desde cero, esta estrategia tiene mucho sentido. Le permite incorporar patrones de diseño de PWA más fácilmente que otras estrategias, en particular permitiéndole aprovechar todo el poder de los <em>service workers</em> desde el principio.</p><h2 id="actualizacion-de-una-store-app" tabindex="-1">Actualización de una <em>store app</em> <a class="header-anchor" href="#actualizacion-de-una-store-app" aria-label="Permalink to &quot;Actualización de una _store app_&quot;">​</a></h2><p>Con la capacidad de publicar una PWA en tiendas de aplicaciones, es posible empaquetar su PWA en un iniciador de PWA y cargarla en tiendas, como Play Store de Google o Windows Store. Si ya tiene una aplicación específica de la plataforma, puede reemplazarla con su PWA publicada en la tienda.</p><p>Con este enfoque, sus usuarios existentes obtienen una actualización de sus experiencias con la PWA, y los nuevos usuarios aún pueden usar o instalar su PWA desde el navegador o las tiendas de aplicaciones. Y tendrás una aplicación para todos, ahorrando costos, tiempo y mejorando la experiencia del usuario.</p><h2 id="lista-de-verificacion-de-pwa" tabindex="-1">Lista de verificación de PWA <a class="header-anchor" href="#lista-de-verificacion-de-pwa" aria-label="Permalink to &quot;Lista de verificación de PWA&quot;">​</a></h2><p>Una Aplicación Web Progresiva es un sitio web, lo que lleva a la pregunta: ¿Cuándo se convierte en una Aplicación Web Progresiva? La respuesta no es tan simple, ya que el concepto PWA no se refiere a una tecnología o pila específica, sino que PWA es un patrón que incluye varios componentes técnicos.</p><p>Si bien no existen reglas únicas para todos los navegadores, existe un conjunto de recomendaciones, llamado <a href="https://web.dev/pwa-checklist/" target="_blank" rel="noreferrer">Lista de Verificación de Aplicaciones Web Progresivas</a>, para ayudarlo a crear una PWA que encantará a los usuarios.</p><h2 id="requisitos-basicos" tabindex="-1">Requisitos básicos <a class="header-anchor" href="#requisitos-basicos" aria-label="Permalink to &quot;Requisitos básicos&quot;">​</a></h2><p>Debido a que las PWA abarcan todos los dispositivos, desde dispositivos móviles hasta computadoras de escritorio, la lista de verificación principal de Aplicaciones Web Progresivas trata sobre lo que debe hacer para que su aplicación sea instalable y confiable para todos los usuarios, independientemente del tamaño de la pantalla o el tipo de entrada.</p><p>Los requisitos básicos son:</p><ul><li><p><strong>Comienza rápido, se mantiene rápido</strong></p><p>El rendimiento juega un papel importante en el éxito de cualquier experiencia en línea, ya que los sitios de alto rendimiento atraen y retienen a los usuarios mejor que los de bajo rendimiento. Los sitios deben centrarse en optimizar las métricas de rendimiento centradas en el usuario.</p></li><li><p><strong>Funciona en cualquier navegador</strong></p><p>Las aplicaciones Web Progresivas son primero aplicaciones web, lo que significa que deben funcionar en todos los navegadores, no solo en uno de ellos. Sin embargo, la experiencia no tiene por qué ser idéntica en todos los navegadores. Puede haber funciones que no sean compatibles con un navegador, con un respaldo para garantizar una buena experiencia.</p></li><li><p><strong>Responsivo a cualquier tamaño de pantalla</strong></p><p>Los usuarios pueden usar su PWA en cualquier tamaño de pantalla y todo el contenido está disponible en cualquier tamaño de ventana gráfica.</p></li><li><p><strong>Proporciona una página sin conexión personalizada</strong></p><p>Cuando los usuarios están desconectados, mantenerlos en su PWA proporciona una experiencia más fluida y nativa que volver a la página sin conexión predeterminada del navegador.</p></li><li><p><strong>Es instalable</strong></p><p>Los usuarios que instalan o agregan aplicaciones a sus pantallas de inicio tienden a interactuar más con esas aplicaciones y, cuando se instala la PWA, puede aprovechar más capacidades para una mejor experiencia de usuario.</p></li></ul><h2 id="caracteristicas-optimas-de-pwa" tabindex="-1">Características óptimas de PWA <a class="header-anchor" href="#caracteristicas-optimas-de-pwa" aria-label="Permalink to &quot;Características óptimas de PWA&quot;">​</a></h2><p>Para crear una Aplicación Web Progresiva realmente excelente, una que se sienta como la mejor aplicación de su clase, necesita algo más que la lista de verificación básica. La lista de verificación óptima de la Aplicación Web Progresiva consiste en hacer que su PWA se sienta capaz y confiable mientras aprovecha lo que hace que la web sea poderosa.</p><p><strong>Proporciona una experiencia fuera de línea</strong></p><p>Al permitir que los usuarios usen su PWA sin conexión, creará una experiencia auténtica similar a una aplicación para ellos. Para ello, identifica aquellas funciones que no requieren conectividad, de modo que los usuarios puedan acceder al menos a algunas funciones.</p><div class="tip custom-block"><p class="custom-block-title">Problemas</p><p>Cuando decimos que la PWA debe proporcionar una experiencia sin conexión, no significa que todos los servicios y contenidos deban estar disponibles sin conexión. Por ejemplo, una aplicación para tomar notas no puede sincronizar sus notas cuando no hay conectividad, pero puede permitir a los usuarios escribir la nota y sincronizar nuevos cambios cuando vuelvan a estar en línea. Como mínimo, deberías mostrar la interfaz de usuario de la aplicación con un mensaje adecuado si tu aplicación necesita una conexión activa.</p></div><p><strong>Es totalmente accesible</strong></p><p>Asegúrese de que los lectores de pantalla entiendan todo el contenido y las interacciones de la aplicación, que se puedan utilizar con solo un teclado, que el enfoque esté indicado y que el contraste de color sea fuerte. Al hacer que su PWA sea accesible, se asegura de que sea utilizable por todos.</p><p><strong>Utiliza potentes capacidades cuando estén disponibles</strong></p><p>Desde mensajería push, WASM y WebGL hasta acceso al sistema de archivos, selectores de contactos e integración con <em>app stores</em>. Las herramientas para crear PWA altamente capaces y profundamente integradas están aquí, lo que le permite crear una experiencia de usuario con todas las funciones, anteriormente reservada para aplicaciones de plataforma, que sus usuarios pueden llevar consigo dondequiera que vayan.</p><p><strong>Se puede descubrir mediante la búsqueda</strong></p><p>Más de la mitad de todo el tráfico del sitio web proviene de búsquedas orgánicas. Asegurarse de que existan URL canónicas para el contenido y que los motores de búsqueda puedan indexar su sitio es fundamental para que los usuarios encuentren su PWA.</p><p><strong>Funciona con cualquier tipo de entrada</strong></p><p>Los usuarios deberían poder cambiar entre tipos de entrada mientras usan su aplicación sin problemas, y los métodos de entrada no deberían depender del tamaño de la pantalla.</p><p><strong>Proporciona contexto para solicitudes de permiso</strong></p><p>Active únicamente solicitudes de permisos como notificaciones, geolocalización y credenciales, después de proporcionar una justificación en contexto para mejorar las posibilidades de aceptar las solicitudes del usuario.</p><p><strong>Sigue las mejores prácticas para un código saludable</strong></p><p>Mantener su aplicación actualizada y su código base en buen estado le facilita ofrecer nuevas funciones que cumplan con los demás objetivos establecidos en esta lista de verificación.</p><div class="info custom-block"><p class="custom-block-title">INFO</p><p>Si bien la lista de verificación de PWA tiene un conjunto de mejores prácticas para todos los desarrolladores, algunos navegadores también tienen <em>Criterios</em> de PWA. Los criterios de PWA son un conjunto de requisitos técnicos que su sitio web debe cumplir para ser tratado como una PWA. Su PWA recibirá un tratamiento especial cuando eso suceda, como activar nuevos eventos, mostrar una insignia o cuadro de diálogo de instalación o agregar un nuevo menú de instalación dentro del navegador.</p></div>',41),r=[s];function t(c,l,u,d,p,m){return a(),i("div",null,r)}const q=e(n,[["render",t]]);export{g as __pageData,q as default};
