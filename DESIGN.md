---
name: Planear con coherencia
description: Cartografía curricular colombiana para recorrer referentes conectados y tomar decisiones de aula.
colors:
  forest: "#123b32"
  forest-deep: "#092821"
  forest-soft: "#225f50"
  sun: "#ffc400"
  sun-pale: "#ffe994"
  mineral: "#f1efe6"
  paper: "#fbfaf5"
  ink: "#172621"
  muted: "#58665f"
  orange-route: "#e76f32"
  white: "#ffffff"
typography:
  display:
    fontFamily: "Familjen Grotesk, sans-serif"
    fontSize: "clamp(3.25rem, 6.4vw, 6rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  headline:
    fontFamily: "Familjen Grotesk, sans-serif"
    fontSize: "clamp(2.5rem, 5vw, 4.7rem)"
    fontWeight: 600
    lineHeight: 1.02
    letterSpacing: "-0.035em"
  title:
    fontFamily: "Familjen Grotesk, sans-serif"
    fontSize: "1.2rem"
    fontWeight: 700
    lineHeight: 1.25
    letterSpacing: "normal"
  body:
    fontFamily: "Atkinson Hyperlegible, sans-serif"
    fontSize: "1.05rem"
    fontWeight: 400
    lineHeight: 1.6
    letterSpacing: "normal"
  label:
    fontFamily: "Familjen Grotesk, sans-serif"
    fontSize: "0.78rem"
    fontWeight: 700
    lineHeight: 1.2
    letterSpacing: "0.13em"
rounded:
  control: "0.35rem"
  dialog: "0.45rem"
  circle: "50%"
  pill: "99px"
spacing:
  xs: "0.5rem"
  sm: "0.75rem"
  md: "1rem"
  lg: "1.25rem"
  xl: "2rem"
  section-inline: "clamp(1.25rem, 6vw, 7rem)"
  section-block: "clamp(5rem, 10vw, 9rem)"
components:
  button-primary:
    backgroundColor: "{colors.sun}"
    textColor: "{colors.forest-deep}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "0.85rem 1.2rem 0.85rem 1.35rem"
    height: "52px"
  button-primary-hover:
    backgroundColor: "#ffdb53"
    textColor: "{colors.forest-deep}"
    rounded: "{rounded.control}"
  button-secondary:
    backgroundColor: "{colors.forest-deep}"
    textColor: "{colors.white}"
    typography: "{typography.title}"
    rounded: "{rounded.control}"
    padding: "0.8rem 1.1rem"
    height: "52px"
  map-node:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    rounded: "{rounded.circle}"
    size: "58px"
  tab-selected:
    backgroundColor: "{colors.forest}"
    textColor: "{colors.white}"
    rounded: "{rounded.pill}"
    padding: "0.6rem 1rem"
  feedback:
    backgroundColor: "{colors.sun-pale}"
    textColor: "{colors.forest-deep}"
    rounded: "{rounded.control}"
    padding: "1.25rem 1.35rem"
---

# Design System: Planear con coherencia

## Overview

**Creative North Star: "Cartografía curricular estratificada"**

El mundo visual convierte el marco curricular en un territorio colombiano contemporáneo: verde selva como campo de orientación, amarillo solar como señal de avance y papel mineral como superficie de lectura. Curvas topográficas, rutas punteadas, coordenadas, brújulas y nodos conectados explican relaciones antes de abrir el detalle; la interfaz evita presentar la normativa como una cuadrícula de tarjetas aisladas.

La composición alterna amplitud editorial y controles táctiles. El primer viewport ancla título, explicación y acción a la izquierda, mientras un relieve curricular ocupa la derecha; después, la historia recorre seis capas, sintetiza cuatro escalas de decisión, plantea un caso y termina en una rutina para la bitácora. La densidad aumenta dentro de la ficha modal, pero el resto del recorrido conserva grandes campos de color y pausas verticales.

**Key Characteristics:**
- Cartografía colombiana abstracta, construida con líneas, nodos, coordenadas y relieve en lugar de fotografía.
- Contraste de verde profundo, amarillo solar y superficies minerales cálidas.
- Jerarquía editorial grande para orientar y controles compactos para explorar.
- Progreso visible, retroalimentación inmediata y cierre de transferencia hacia Moodle.
- Forma estratificada y conectada; nunca una colección de normas visualmente independientes.

## Colors

La paleta combina vegetación profunda, luz solar y papel geológico; los acentos cálidos señalan rutas y decisiones sin competir con el amarillo principal.

### Primary
- **Verde selva:** campo institucional del hero, nodos, encabezados de ficha y superficies de reflexión; concentra orientación y autoridad.
- **Verde selva profundo:** fondo del desafío, pie y acciones oscuras; sostiene los momentos de mayor contraste.
- **Verde de relieve:** etiquetas, rutas secundarias, iconografía y estados hover sobre verde; conecta superficies claras y oscuras.

### Secondary
- **Amarillo solar:** acción principal, ruta animada, progreso, foco, nodos clave y cierre; siempre comunica dirección, activación o culminación.
- **Amarillo solar pálido:** texto auxiliar sobre verde y superficie de retroalimentación o nota de campo.

### Tertiary
- **Naranja de bifurcación:** ramal del mapa, flechas de relación y estados de error; marca desvíos o contraste pedagógico, no acciones principales.

### Neutral
- **Papel mineral:** superficie del mapa y borde óptico de sus nodos.
- **Papel claro:** fondo de lectura, ficha modal y sección de relaciones.
- **Tinta vegetal:** texto principal sobre superficies claras.
- **Gris musgo:** texto secundario, preguntas y leyendas.
- **Blanco:** títulos, controles e iconos sobre campos verdes.

### Named Rules
**The Solar Signal Rule.** El amarillo solar se reserva para dirección, progreso, foco y resolución; no funciona como relleno decorativo general.

**The Layered Terrain Rule.** Los cambios de sección se expresan con campos verde, mineral, papel y amarillo; la jerarquía depende primero de estratos tonales y después de bordes o sombras.

## Typography

**Display Font:** Familjen Grotesk (con `sans-serif` como respaldo)  
**Body Font:** Atkinson Hyperlegible (con `sans-serif` como respaldo)

**Character:** Familjen Grotesk aporta una voz contemporánea, geográfica y compacta a títulos, cifras, etiquetas y controles. Atkinson Hyperlegible mantiene el contenido pedagógico abierto, distinguible y cómodo en párrafos largos.

### Hierarchy
- **Display** (600, escala fluida grande, interlínea 1.02): título del primer viewport, con una segunda línea solar que nombra el mapa curricular.
- **Headline** (600, escala fluida, interlínea 1.02): títulos de sección y del desafío; mantienen el ritmo editorial y el balance de líneas.
- **Title** (700, compacto): nombres de nodos, subtítulos de ficha, cifras y acciones; puede subir de tamaño en el diálogo y el diagrama de escalas.
- **Body** (400, base amplia, interlínea 1.6): explicaciones y contenido normativo, normalmente limitado entre 43 y 72 caracteres por línea según el contexto.
- **Label** (700, pequeña, espaciado amplio, mayúsculas): coordenadas, capas, índices y metadatos de orientación.

### Named Rules
**The Two-Voice Rule.** Familjen Grotesk orienta y rotula; Atkinson Hyperlegible explica. No intercambiar sus funciones en contenido nuevo.

**The Compressed Heading Rule.** Los encabezados usan interlínea cerrada y espaciado negativo; los párrafos recuperan aire mediante interlínea generosa y ancho de lectura controlado.

## Layout

El sistema usa secciones de ancho completo y contenedores principales de hasta `1260px`. El espaciado lateral es fluido, generalmente entre `1.25rem` y `7rem`, y las secciones emplean pausas verticales amplias entre `5rem` y `9rem`. La cuadrícula no es modular: responde a una ruta, con asimetrías deliberadas, nodos escalonados y conexiones visibles.

En escritorio, el hero divide el viewport en dos columnas casi equivalentes: copia a la izquierda y mapa cuadrado a la derecha. El mapa curricular ocupa `680px` de alto y posiciona seis nodos sobre una trayectoria SVG; la síntesis posterior usa cuatro escalones horizontales. Encabezados de sección y bloques introductorios suelen dividirse en una columna dominante y otra explicativa.

A `960px`, el hero pasa a una columna y el relieve se vuelve una capa absoluta semitransparente. La trayectoria curricular se transforma en un eje vertical y los nodos vuelven al flujo; la síntesis de cuatro escalas también se apila. A `640px`, se reducen marca y estado de ruta, desaparecen textos cartográficos auxiliares, el hero conserva al menos `800px`, los nodos ocupan todo el ancho, la rutina de pensamiento se apila y el pie cambia a columna.

**The Connected-Strata Rule.** Toda extensión debe conservar una lectura de base, orientación, meta, trayecto, territorio y conexión; las relaciones se muestran espacialmente antes de explicarse en detalle.

**The First-Viewport Rule.** En escritorio, la orientación verbal permanece a la izquierda y el relieve a la derecha; en pantallas estrechas el relieve puede convertirse en fondo, pero nunca desplazar la acción inicial.

## Elevation & Depth

La profundidad es principalmente tonal y cartográfica. Los grandes planos permanecen planos; las curvas, retículas, trazos y formas orgánicas sugieren relieve. Las sombras aparecen solo en elementos que flotan o se abren: nodos circulares, marcadores y la ficha modal.

### Shadow Vocabulary
- **Nodo elevado** (`0 8px 24px rgba(9,40,33,.2)`): separa hotspots circulares del papel mineral.
- **Marcador puntual** (`0 6px 18px rgba(0,0,0,.28)`): refuerza pequeños puntos sobre el mapa oscuro.
- **Ficha modal** (`0 24px 80px rgba(4,24,19,.45)`): establece el único plano de lectura claramente suspendido.

### Named Rules
**The Flat-Terrain Rule.** Las secciones y controles rectangulares permanecen planos en reposo; la sombra se reserva para nodos, marcadores y diálogo.

## Shapes

La forma base de los controles es casi rectangular, con esquinas compactas. Botones de acción, respuestas y feedback usan un radio bajo; el diálogo aumenta apenas ese redondeo. Los nodos, brújulas y botones de cierre son círculos, mientras las pestañas son píldoras. Notas y tarjetas de pensamiento incorporan un recorte diagonal que recuerda una ficha de campo doblada.

Las curvas topográficas y contornos orgánicos de gran escala suavizan la geometría de las secciones sin convertir los componentes en cápsulas. Las conexiones emplean líneas discontinuas, retículas finas y bordes de un píxel.

**The Field-Tool Rule.** Los controles deben sentirse como instrumentos de cartografía: compactos, precisos y táctiles; evitar tarjetas genéricas con radios grandes y sombras suaves.

## Components

### Buttons
- **Shape:** acción rectangular compacta, altura mínima de `52px`; las opciones del desafío aumentan a `78px` para alojar texto pedagógico.
- **Primary:** amarillo solar con tinta verde profunda, peso fuerte y flecha lineal; se eleva `2px` y aclara en hover.
- **Secondary:** verde profundo con texto blanco; cambia a verde de relieve y se eleva `2px` en hover.
- **Ghost:** controles de ficha y pie sin relleno; dependen de texto, borde o subrayado y adquieren amarillo o blanco en hover.
- **Focus:** todos los enlaces y botones reciben un contorno amarillo de `3px` separado `4px`; el foco nunca depende solo del cambio cromático interno.
- **Disabled:** la navegación anterior de la ficha baja a `35%` de opacidad y cambia a cursor no disponible.

### Chips
- **Style:** pestañas de disciplina con borde verde grisáceo, fondo transparente y forma de píldora.
- **State:** la selección se expresa simultáneamente con fondo verde, texto blanco, `aria-selected` y gestión de `tabindex`.

### Cards / Containers
- **Corner Style:** las respuestas y el feedback usan esquinas compactas; las fichas de pensamiento y notas usan un corte diagonal distintivo.
- **Background:** transparente o papel en lectura; verde para reflexión; amarillo pálido para retroalimentación.
- **Shadow Strategy:** sin sombra salvo en la ficha modal; la separación normal usa contraste tonal y bordes finos.
- **Border:** un píxel en tonos musgo; las respuestas cambian a amarillo o naranja según el resultado.
- **Internal Padding:** entre `0.9rem` y `1.6rem` en controles y contenedores de contenido.

### Navigation
- **Topbar:** absoluta sobre el hero, con logotipo blanco a la izquierda y progreso de seis capas a la derecha. El progreso combina contador textual y barra amarilla animada.
- **Dialog:** ficha modal nativa con encabezado verde, progreso solar, cuerpo desplazable y navegación anterior/siguiente persistente. El último paso convierte “Siguiente” en “Cerrar ficha”.
- **Skip link:** permanece fuera del viewport hasta recibir foco y aparece como control amarillo de alto contraste.

### Curriculum Map

Los seis nodos son botones circulares de `58px` vinculados por una ruta discontinua. Cada nodo combina índice de capa, icono, nombre y pregunta; hover o foco amplían el círculo y suavizan el verde. El estado visitado sustituye visualmente el icono por una marca amarilla y actualiza a la vez el contador y la barra global. El nodo “Tiempo efectivo” invierte la jerarquía con fondo amarillo y un pulso naranja.

### Challenge & Feedback

Las respuestas se organizan como filas oscuras con identificador circular. Hover desplaza la fila `4px`; la selección correcta usa amarillo y la incorrecta naranja. El feedback aparece inmediatamente en un bloque amarillo pálido, recibe foco programático y anuncia el resultado mediante una región viva.

### Motion & Accessibility

La ruta del hero se dibuja durante `2.8s`; el nodo de tiempo emite un pulso de `2.2s`; barras de progreso usan transiciones de salida entre `0.35s` y `0.45s`; hovers duran `0.2s`. Con `prefers-reduced-motion: reduce`, el desplazamiento suave se desactiva y todas las animaciones y transiciones se reducen prácticamente a cero. La interfaz usa HTML semántico, diálogo nativo, nombres accesibles, regiones vivas, pestañas con flechas, foco visible y estados que combinan color con texto, marcas o selección estructural.

## Do's and Don'ts

### Do:
- **Do** construir nuevas vistas como estratos conectados mediante rutas, nodos, escalas, coordenadas o contornos.
- **Do** reservar el amarillo solar para acciones, avance, foco, conexiones clave y resolución.
- **Do** mantener Familjen Grotesk en orientación y Atkinson Hyperlegible en explicación.
- **Do** preservar el logotipo blanco sobre fondos verdes oscuros y su texto alternativo institucional.
- **Do** mantener operabilidad por teclado, foco de alto contraste, reducción de movimiento y señales que no dependan solo del color.
- **Do** convertir la cartografía horizontal en una ruta vertical legible por debajo de `960px`.

### Don't:
- **Don't** presentar los referentes como una cuadrícula uniforme de tarjetas educativas aisladas.
- **Don't** usar amarillo, naranja o sombras como decoración sin función de navegación, estado o profundidad.
- **Don't** introducir inputs o áreas de texto: la transferencia ocurre mediante la rutina copiable hacia Moodle.
- **Don't** reemplazar los contornos abstractos por fotografías genéricas o ilustraciones sin relación cartográfica.
- **Don't** ocultar el progreso, el feedback o el estado visitado detrás de una señal exclusivamente cromática.
- **Don't** añadir radios grandes y superficies flotantes que conviertan los instrumentos de campo en componentes de aplicación genéricos.
