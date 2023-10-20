# Fundamentos

:::info
La fuente original (en ingles) de este tutorial se encuentra [aquí](https://web.dev/learn/pwa/foundations/)
:::

# Un fundamento sólido

Un fundamento sólido es el requisito básico para crear excelentes PWA. Para implementar este fundamento, necesita diseñar y codificar las limitaciones de la web utilizando un par de principios:

- Utilice el móvil como limitación de enfoque. Asegúrese de que cada vista de su diseño se centre únicamente en el contenido y las interacciones esenciales.

- Enfatice el contenido y la funcionalidad principal en el proceso de diseño.

- Mejorar progresivamente cuando sea necesario. Empiece por crear el contenido y la funcionalidad principales de un componente con las herramientas más sencillas y disponibles. Hazlo accesible. Luego, pruebe las funciones avanzadas que le gustaría utilizar y mejore su componente con ellas.

- Ofrezca una experiencia de usuario rápida y buena centrada en métricas de rendimiento web centradas en el usuario, obtenga métricas de usuario reales y mejore el rendimiento para todos sus usuarios, sin importar su conexión de red, tipo de entrada, potencia de CPU o GPU.

:::tip Nota
La accesibilidad es clave para una PWA exitosa. Siga [estas pautas](https://web.dev/articles/pwa-checklist#:~:text=to%20cached%20content%20or%20an%20offline%20indicator%20as%20needed.-,is%20fully%20accessible) para asegurarse de que cualquier persona pueda acceder a su aplicación, en cualquier lugar.
::: 

Si sigue estos principios y los mejora con patrones y funciones web modernos, puede crear experiencias excelentes y rápidas con diseños verdaderamente intrínsecos. Diseños que son potenciados con restricciones en lugar de píxeles, lo que permite a cada usuario acceder a su contenido y funcionalidad principal de la manera que mejor se adapte a su contexto de navegación particular.

## Diseño web adaptable

Desde el artículo _A List Apart de 2010 de Ethan Marcotte_, [Responsive Web Design](https://alistapart.com/article/responsive-web-design/), se ha alentado a los diseñadores y desarrolladores a crear experiencias flexibles, creando interfaces de usuario que funcionen en un espectro de tamaños de pantalla y dispositivos.

Sin embargo, en algún momento, eso se redujo a tamaños de dispositivos móviles, tabletas y computadoras de escritorio, con anchos fuertemente influenciados por los tamaños de pantalla de iOS. Con CSS moderno y un enfoque renovado en la intención original del diseño responsivo, Podemos volver a colocar el _squish_ en sitios _squishy_.

El diseño web responsivo introduce tres ingredientes técnicos:

- _Fluid grids_
- _Flexible media_
- _Media queries_

Ethan concluye que estos requisitos técnicos no son suficientes; El camino a seguir también requiere una forma diferente de pensar.

## El mito del usuario móvil

En los primeros días del diseño responsivo, se hacían suposiciones con el fin de hacer que los sitios fueran más fáciles de diseñar. Por ejemplo, las experiencias pequeñas eran para teléfonos y tenían un ancho de 320 px, las experiencias medianas eran para tabletas y tenían un ancho de 1024 px, y cualquier cosa más grande era para computadoras de escritorio. Las pantallas pequeñas tenían capacidades táctiles, las pantallas grandes no. Los usuarios de teléfonos estaban apresurados y distraídos y, por lo tanto, necesitaban una experiencia "ligera".

Nada de esto es verdad; son mitos móviles perpetuados por la suposición de que las necesidades de un usuario son fundamentalmente diferentes basándose únicamente en el tamaño de la pantalla o el tipo de dispositivo. Esto no resiste el escrutinio.

Tomemos, por ejemplo, una PWA de red social que puede instalar hoy en dispositivos móviles y de escritorio. En el escritorio, muchos usuarios pueden mantener una ventana estrecha con el _feed_ a un lado de la pantalla mientras trabajan, y suponer que están en un dispositivo móvil debido al ancho disponible sería incorrecto.

El mundo PWA que está fuera de la pestaña del navegador incluso está agregando nuevos desafíos al mundo del diseño responsivo, como el modo mini y el trabajo con dispositivos plegables.

## Modo mini

Con una PWA instalada en un dispositivo de escritorio, una ventana puede volverse muy pequeña; más pequeño que la ventana de un navegador, más pequeño que una ventana gráfica móvil. Esto es algo nuevo en la web: podemos admitir un modo mini, una ventana que puede ser tan pequeña como 200x100 píxeles CSS.

Al crear una PWA hoy en día, es una buena idea pensar en qué ofrecer en modo mini, gracias al diseño web responsivo, como solo botones de control en un reproductor de música, información del tablero o acciones rápidas.

<video controls>
  <source src="./assets/foundations-1.mp4">
</video>

En el escritorio, una PWA se puede representar en una ventana más pequeña que la ventana más pequeña que haya diseñado para el navegador. Agrega un nuevo punto de interrupción para su diseño web responsivo: el modo mini.


## Plegables e híbridos

Los dispositivos plegables e híbridos también son comunes hoy en día:

- Pequeños teléfonos plegables.
- Dispositivos plegables que pueden usarse como teléfonos o _tablets_.
- Portátiles que se pueden transformar en _tablets_.
- _Tablets_ que pueden actuar como portátiles con teclado y _trackpad_ (panel táctil).
- Luego, los teléfonos se pueden convertir en computadoras de escritorio con un concentrador.

Si bien el desafío existe para todos los sitios web, con una Aplicación Web Progresiva usted tiene el control y es responsable de la ventana cuando se instala la aplicación. Por tanto, tu diseño debe reaccionar y ofrecer la mejor experiencia en cada contexto.

:::tip Nota
Se está volviendo común transferir la navegación de una aplicación entre dispositivos, por lo que su PWA se puede representar en un reloj inteligente después de recibir una notificación; la navegación se puede transferir a un teléfono y luego a una computadora portátil. La compatibilidad con todos los modos y dispositivos es clave para evitar la frustración del usuario.
:::

## Everything first
https://web.dev/learn/pwa/foundations/#everything_first
