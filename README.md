# Ángel Viejobueno Portfolio

Portfolio profesional bilingüe para presentar el perfil de Ángel Viejobueno como Senior .NET Developer, Arquitecto .NET y especialista en RAG con Semantic Kernel. La aplicación está pensada como una landing page moderna: una única página con secciones, navegación interna, selector de idioma, descarga de CV y una base SEO cuidada para publicación en internet.

Este README explica la aplicación desde un punto de vista técnico, pero con lenguaje accesible para alguien sin conocimientos profundos de frontend.

## Resumen En Una Frase

La aplicación es una web hecha con React que muestra contenido profesional en español e inglés, genera versiones optimizadas para SEO en `/es/` y `/en/`, y está preparada para desplegarse como sitio estático gratuito en Cloudflare Pages.

## Qué Hace La Aplicación

- Presenta una página de portfolio profesional con secciones como hero, sobre mí, experiencia, especialidad, principios, stack técnico, servicios para pymes y contacto.
- Permite cambiar entre español e inglés con rutas reales: `/es/` y `/en/`.
- Redirige la raíz `/` al idioma preferido del usuario.
- Descarga el CV correcto según idioma: `public/Angel-CV-ES.pdf` o `public/Angel-CV-EN.pdf`.
- Mantiene el contenido centralizado en un único fichero de datos para facilitar cambios de textos sin tocar demasiados componentes.
- Genera HTML con etiquetas SEO específicas por idioma durante el build de producción.

## Tecnologías Usadas

### Vite

Vite es la herramienta que levanta el entorno de desarrollo y genera la versión final de producción.

Se usa porque:

- Arranca muy rápido en desarrollo.
- Genera bundles optimizados para producción.
- Encaja muy bien con React y TypeScript.
- Es más simple y ligero que frameworks más grandes cuando la app es una landing page.

Ficheros relacionados:

- `vite.config.ts`
- `index.html`
- `package.json`

### React

React es la librería principal de interfaz. La página se divide en componentes pequeños: cabecera, hero, experiencia, contacto, stack técnico, etc.

Se usa porque:

- Permite construir la web por piezas reutilizables.
- Facilita mantener secciones separadas y comprensibles.
- Hace sencillo actualizar la pantalla cuando cambia el idioma.
- Es una tecnología estándar y muy extendida en frontend.

Ficheros relacionados:

- `src/main.tsx`
- `src/App.tsx`
- `src/pages/Index.tsx`
- `src/components/portfolio/`

### TypeScript

TypeScript es JavaScript con tipos. Ayuda a detectar errores antes de ejecutar la aplicación.

Se usa porque:

- Reduce errores al trabajar con contenido bilingüe y estructuras de datos grandes.
- Permite definir tipos como `Locale`, `PortfolioContent` o `PortfolioIcon`.
- Hace más claro qué datos espera cada componente.

Ficheros relacionados:

- `tsconfig.json`
- `tsconfig.app.json`
- `src/data/portfolio.ts`

### React Router

React Router gestiona las rutas internas de la aplicación.

Se usa porque:

- La aplicación necesita URLs reales para cada idioma.
- `/es/` y `/en/` no son solo cambios visuales: son rutas independientes.
- Permite que el selector de idioma cambie la URL sin recargar toda la página.

Rutas principales:

- `/`: redirige al idioma preferido.
- `/es`: muestra la versión en español.
- `/en`: muestra la versión en inglés.
- `*`: muestra una pantalla 404 para rutas no reconocidas.

Ficheros relacionados:

- `src/App.tsx`
- `src/pages/Index.tsx`
- `src/lib/i18n.ts`

### Tailwind CSS

Tailwind CSS es el sistema de estilos usado para diseñar la interfaz mediante clases utilitarias.

Se usa porque:

- Permite crear diseños modernos sin escribir grandes hojas CSS manuales.
- Facilita mantener coherencia visual en espaciados, colores, bordes y responsive.
- Es rápido para iterar en una landing page visual.

Ficheros relacionados:

- `src/globals.css`
- `tailwind.config.ts`
- `postcss.config.js`

### shadcn/ui Y Radix UI

shadcn/ui proporciona componentes reutilizables basados en Radix UI. En este proyecto hay muchos componentes disponibles en `src/components/ui/`.

Se usa porque:

- Ofrece componentes accesibles y sólidos.
- Evita construir desde cero elementos comunes como botones, diálogos, tooltips o formularios.
- Encaja bien con Tailwind.

En esta app se usa especialmente el sistema de `Button`, `Toaster`, `TooltipProvider` y componentes base disponibles para futuras ampliaciones.

Ficheros relacionados:

- `src/components/ui/`
- `components.json`

### Lucide React

Lucide React es la librería de iconos.

Se usa porque:

- Tiene iconos limpios y modernos.
- Los iconos son componentes React fáciles de reutilizar.
- Ayuda a comunicar visualmente tecnologías, servicios y acciones.

Ficheros relacionados:

- `src/components/portfolio/icon-map.tsx`
- `src/components/portfolio/TechStack.tsx`

### Simple Icons CDN

La sección de stack técnico usa iconos de marcas desde `https://cdn.simpleicons.org`.

Se usa porque:

- Permite mostrar iconos reconocibles de tecnologías como Docker, GitHub, Azure, PostgreSQL o .NET.
- Evita añadir muchos assets manuales al proyecto.
- Si un icono falla, la app muestra un monograma alternativo.

Fichero relacionado:

- `src/components/portfolio/TechStack.tsx`

### TanStack Query

TanStack Query está configurado mediante `QueryClientProvider`, aunque actualmente la landing no consume datos remotos.

Se mantiene porque:

- Está preparado por si en el futuro se añaden llamadas a APIs.
- No interfiere con la app actual.
- Es una dependencia habitual en plantillas React modernas.

Fichero relacionado:

- `src/App.tsx`

## Arquitectura General

La app sigue una arquitectura sencilla:

1. `src/main.tsx` arranca React y monta la aplicación en el HTML.
2. `src/App.tsx` define proveedores globales y rutas.
3. `src/pages/Index.tsx` compone todas las secciones visibles de la landing.
4. `src/data/portfolio.ts` contiene todos los textos y datos en español e inglés.
5. `src/components/portfolio/` contiene las piezas visuales del portfolio.
6. `scripts/prerender-seo.mjs` genera HTML SEO estático tras el build.

La idea importante: la web no está construida como una página HTML gigante. Está montada por piezas. Cada pieza tiene una responsabilidad clara.

## Estructura De Carpetas

```txt
.
├── public/
│   ├── Angel-CV-ES.pdf
│   ├── Angel-CV-EN.pdf
│   ├── _redirects
│   ├── robots.txt
│   └── favicon.ico
├── scripts/
│   └── prerender-seo.mjs
├── src/
│   ├── App.tsx
│   ├── main.tsx
│   ├── globals.css
│   ├── data/
│   │   └── portfolio.ts
│   ├── lib/
│   │   ├── i18n.ts
│   │   └── utils.ts
│   ├── pages/
│   │   ├── Index.tsx
│   │   └── NotFound.tsx
│   └── components/
│       ├── portfolio/
│       └── ui/
├── index.html
├── package.json
├── tailwind.config.ts
└── vite.config.ts
```

## Cómo Funciona El Idioma

La aplicación soporta dos idiomas:

- Español: `/es/`
- Inglés: `/en/`

La lógica está en `src/lib/i18n.ts`.

Cuando alguien entra en `/`:

1. La app mira si la URL ya tiene idioma.
2. Si no lo tiene, revisa si el usuario guardó antes un idioma en `localStorage`.
3. Si no hay idioma guardado, mira el idioma del navegador.
4. Redirige a `/es/` o `/en/`.

Cuando alguien cambia el idioma desde la cabecera:

1. React Router cambia la ruta.
2. `Index` lee el nuevo idioma desde la URL.
3. Se carga el contenido correspondiente desde `portfolioContent`.
4. Se actualizan los textos visibles y las etiquetas SEO dinámicas.

Esto es importante porque cada idioma tiene su propia URL. Para SEO y para compartir enlaces, esto es mejor que tener una sola URL que cambia textos internamente.

## Dónde Se Edita El Contenido

El contenido principal está en:

```txt
src/data/portfolio.ts
```

Ahí se definen:

- Textos SEO.
- Menús de navegación.
- Títulos y descripciones.
- Métricas del hero.
- Bloques de experiencia.
- Servicios.
- Stack técnico.
- Contenido para pymes.
- Enlaces de contacto.
- Rutas de descarga de CV.

Ventaja: para cambiar textos normalmente no hace falta tocar los componentes visuales.

## Componentes Principales

Los componentes del portfolio están en:

```txt
src/components/portfolio/
```

Algunos componentes importantes:

- `Header.tsx`: cabecera, navegación y selector de idioma.
- `Hero.tsx`: primera sección visible, con nombre, enfoque profesional y llamadas a la acción.
- `About.tsx`: resumen profesional.
- `Expertise.tsx`: áreas de especialidad.
- `Experience.tsx`: bloques de experiencia e impacto.
- `Principles.tsx`: principios de trabajo.
- `TechStack.tsx`: tecnologías y herramientas.
- `Pymes.tsx`: propuesta de valor para pequeñas y medianas empresas.
- `Services.tsx`: servicios profesionales ofrecidos.
- `Contact.tsx`: enlace principal de contacto.
- `Footer.tsx`: cierre de la página.
- `BrandMark.tsx`: marca visual/monograma.

## Diseño Visual

La app usa una estética oscura, técnica y moderna:

- Fondo oscuro.
- Acentos verdes.
- Tarjetas con bordes suaves.
- Gradientes sutiles.
- Tipografías importadas desde Google Fonts.
- Iconos técnicos.
- Diseño responsive para móvil, tablet y escritorio.

Los estilos globales están en:

```txt
src/globals.css
```

La configuración de Tailwind está en:

```txt
tailwind.config.ts
```

## Trabajo SEO Implementado

SEO significa optimizar la web para que buscadores, redes sociales y herramientas externas entiendan mejor qué contiene la página.

Esta app incluye varias capas de SEO.

### 1. URLs Por Idioma

Cada idioma tiene su propia dirección:

- `/es/`
- `/en/`

Esto ayuda a Google a entender que hay dos versiones lingüísticas de la misma página.

También ayuda a compartir enlaces concretos. Por ejemplo, un reclutador español puede recibir `/es/`, mientras que un cliente internacional puede recibir `/en/`.

### 2. Títulos Y Descripciones SEO

Cada idioma tiene su propio:

- `<title>`
- `meta description`
- `meta keywords`
- `author`
- `robots`

Estos datos se definen en `src/data/portfolio.ts` y se aplican tanto en tiempo de ejecución como durante el build.

El título es lo que suele aparecer como encabezado del resultado en Google. La descripción es el resumen que puede aparecer debajo.

### 3. Canonical URL

La app genera etiquetas canonical.

Una canonical URL indica cuál es la versión principal de una página. Esto evita que buscadores interpreten URLs parecidas como contenido duplicado.

Ejemplo conceptual:

```html
<link rel="canonical" href="https://dominio.com/es/" />
```

Si no se configura dominio, el build genera rutas relativas como `/es/`. Para producción conviene definir `SITE_URL`.

### 4. Hreflang

La app genera enlaces `hreflang`.

Sirven para decirle a Google:

- Esta es la versión en español.
- Esta es la versión en inglés.
- Esta es la versión por defecto.

Ejemplo conceptual:

```html
<link rel="alternate" hreflang="es" href="https://dominio.com/es/" />
<link rel="alternate" hreflang="en" href="https://dominio.com/en/" />
<link rel="alternate" hreflang="x-default" href="https://dominio.com/en/" />
```

Esto es especialmente importante para una web bilingüe.

### 5. Open Graph

Open Graph son etiquetas que usan plataformas como LinkedIn, Facebook o WhatsApp para mostrar una vista previa cuando se comparte un enlace.

La app genera:

- `og:type`
- `og:title`
- `og:description`
- `og:url`
- `og:site_name`
- `og:locale`
- `og:locale:alternate`

Esto ayuda a que el enlace compartido tenga título, descripción e idioma correctos.

### 6. Twitter Cards

También se generan etiquetas para vistas previas en plataformas compatibles con Twitter Cards:

- `twitter:card`
- `twitter:title`
- `twitter:description`

### 7. Datos Estructurados Schema.org

La app genera un bloque JSON-LD con datos estructurados de tipo:

- `ProfilePage`
- `Person`

Esto sirve para explicar de forma estructurada que la página representa el perfil profesional de una persona.

Incluye datos como:

- Nombre.
- Rol profesional.
- Descripción.
- URL.
- LinkedIn.
- Competencias y palabras clave.
- Idioma de la página.

Este bloque se genera con:

```txt
application/ld+json
```

Los buscadores pueden usar esta información para comprender mejor la entidad profesional detrás de la web.

### 8. HTML Lang

La etiqueta `<html>` recibe el idioma correcto:

- `lang="es-ES"` para español.
- `lang="en"` para inglés.

Esto ayuda a:

- Buscadores.
- Lectores de pantalla.
- Herramientas de accesibilidad.
- Navegadores.

### 9. Robots

La app incluye:

```txt
public/robots.txt
```

Este fichero permite que los bots de buscadores rastreen la web.

Durante el build, si se define `SITE_URL`, el script también añade la referencia a `sitemap.xml`.

### 10. Sitemap

Si en producción se define `SITE_URL` o `VITE_SITE_URL`, el script SEO genera:

```txt
dist/sitemap.xml
```

El sitemap lista las páginas principales:

- `/en/`
- `/es/`

Esto ayuda a los buscadores a descubrir las URLs importantes.

### 11. Prerender SEO

La app tiene un script especial:

```txt
scripts/prerender-seo.mjs
```

Este script se ejecuta después de `vite build`.

Lo que hace:

1. Lee el HTML generado por Vite.
2. Lee el contenido bilingüe desde `src/data/portfolio.ts`.
3. Genera una versión SEO para `/en/`.
4. Genera una versión SEO para `/es/`.
5. Escribe:
   - `dist/en/index.html`
   - `dist/es/index.html`
6. Ajusta títulos, descripciones, canonical, hreflang, Open Graph, Twitter Cards y JSON-LD.
7. Si hay `SITE_URL`, genera también `sitemap.xml`.

Esto no es un SSR completo. Es decir, no renderiza todo el contenido visual como HTML estático. La interfaz sigue cargándose con React en el navegador. Pero sí deja preparadas las etiquetas importantes del `<head>` para buscadores y redes sociales.

Para una landing portfolio, esta solución es una buena relación entre simplicidad y SEO.

## Por Qué No Se Usa SSR Completo

SSR significa Server-Side Rendering: generar toda la página en el servidor antes de enviarla al navegador.

No se ha usado porque:

- La aplicación es una landing page, no una plataforma compleja.
- Vite + prerender SEO mantiene el proyecto más sencillo.
- No hace falta mantener un servidor Node en producción.
- Se puede desplegar como sitio estático.
- El coste técnico es menor.

Si más adelante se quiere SEO máximo sobre todo el contenido textual renderizado como HTML, se podría migrar a:

- Next.js.
- Remix.
- Astro.
- Vite con prerender completo.

Pero para la fase actual, la solución implementada es pragmática.

## Build De Producción

Comando principal:

```sh
pnpm build
```

Internamente ejecuta:

```sh
vite build && node scripts/prerender-seo.mjs
```

Resultado:

```txt
dist/
├── index.html
├── en/
│   └── index.html
├── es/
│   └── index.html
├── assets/
├── robots.txt
├── Angel-CV-EN.pdf
└── Angel-CV-ES.pdf
```

Si se define `SITE_URL`, también aparecerá:

```txt
dist/sitemap.xml
```

## Variables De Entorno Recomendadas

Para producción es recomendable definir una de estas variables:

```sh
SITE_URL=https://tu-dominio.com
```

o:

```sh
VITE_SITE_URL=https://tu-dominio.com
```

Estas variables sirven para generar URLs absolutas en:

- Canonical.
- Hreflang.
- Open Graph.
- JSON-LD.
- Sitemap.
- Robots.

Sin estas variables, la app sigue funcionando, pero las URLs SEO se generan como rutas relativas.

## Desarrollo Local

Instalar dependencias:

```sh
pnpm install
```

Arrancar en local:

```sh
pnpm dev
```

La configuración de Vite usa el puerto `8080`.

Normalmente se abrirá en:

```txt
http://localhost:8080
```

## Validación Técnica

Comandos útiles:

```sh
pnpm build
```

Genera la versión de producción.

```sh
pnpm lint
```

Revisa reglas de ESLint.

```sh
pnpm preview
```

Sirve localmente el resultado de producción generado en `dist/`.

## Despliegue

La app está preparada para desplegarse gratis en Cloudflare Pages.

### Qué Necesitas

- Cuenta gratuita de Cloudflare.
- Repositorio Git nuevo con el código de la app.
- `pnpm-lock.yaml` incluido en el repositorio para instalar dependencias de forma reproducible.
- Opcionalmente, un dominio propio. No es obligatorio: Cloudflare Pages ofrece una URL gratuita `*.pages.dev`.

Configuración recomendada:

```txt
Build command: pnpm build
Build output directory: dist
```

Variable de entorno recomendada:

```txt
SITE_URL=https://tu-dominio.com
```

Si todavía no hay dominio propio, se puede usar la URL gratuita de Cloudflare Pages:

```txt
SITE_URL=https://nombre-del-proyecto.pages.dev
```

Esta variable permite generar canonical, hreflang, Open Graph, JSON-LD, `robots.txt` y `sitemap.xml` con URLs absolutas.

Para que Cloudflare Pages resuelva correctamente las rutas de una aplicación React, se usa:

```txt
public/_redirects
```

Ese fichero se copia automáticamente a `dist/_redirects` durante el build e indica:

- `/en` y `/en/` deben servir `dist/en/index.html`.
- `/es` y `/es/` deben servir `dist/es/index.html`.
- El resto de rutas vuelven a `index.html`, típico en aplicaciones React.

Esto es importante porque una SPA necesita que el servidor devuelva HTML aunque el usuario entre directamente a una ruta interna.

También se usa:

```txt
public/_headers
```

Ese fichero añade cabeceras básicas de seguridad y reglas de cache para assets generados por Vite.

No se necesita backend, servidor propio ni plan de pago para el caso actual.

## Decisiones Técnicas Importantes

### Contenido Separado De La Vista

El texto está en `src/data/portfolio.ts` y los componentes visuales están en `src/components/portfolio/`.

Esto permite cambiar contenido sin rediseñar la app.

### Rutas Reales Para Idiomas

No se usa una única URL con un estado interno de idioma. Se usan URLs reales.

Esto es mejor para:

- SEO.
- Compartir enlaces.
- Analítica.
- Claridad para usuarios.

### SEO Estático Más SEO Dinámico

La app hace dos cosas:

1. Genera etiquetas SEO estáticas durante el build.
2. Actualiza etiquetas SEO en el navegador cuando React está funcionando.

Esto da cobertura tanto a bots/redes que leen el HTML inicial como a la navegación normal del usuario.

### Sitio Estático

La aplicación no necesita backend propio.

Eso simplifica:

- Hosting.
- Costes.
- Mantenimiento.
- Seguridad.

## Limitaciones Actuales

- No hay formulario de contacto propio; el contacto se hace por LinkedIn.
- No hay backend ni base de datos.
- No hay SSR completo del contenido visual.
- Algunas dependencias de la plantilla están instaladas aunque no todas se usan activamente.
- El sitemap solo se genera si se configura `SITE_URL` o `VITE_SITE_URL`.
- Aún no hay imagen Open Graph personalizada (`og:image`), por lo que las vistas previas sociales no tendrán una imagen específica del portfolio.

## Mejoras Futuras Recomendadas

- Añadir una imagen Open Graph personalizada para LinkedIn y redes sociales.
- Añadir `SITE_URL` en el entorno de despliegue.
- Revisar y sustituir enlaces placeholder de GitHub si se activa la sección de proyectos.
- Añadir analítica ligera si se quiere medir tráfico.
- Crear un formulario de contacto si se desea captar leads sin depender solo de LinkedIn.
- Considerar prerender completo o Astro/Next.js si se busca el máximo SEO del contenido textual.
- Activar un repositorio Git nuevo cuando el proyecto esté listo para versionarse.

## Estado Del Repositorio

Actualmente la carpeta no necesita estar dentro de un repositorio Git para funcionar. Cuando se quiera versionar de nuevo, se puede crear un repositorio limpio desde cero.

Comandos típicos para hacerlo en el futuro:

```sh
git init
git add .
git commit -m "Initial portfolio version"
```

## Resumen Para Alguien No Frontend

Esta web funciona como una presentación profesional interactiva. React se encarga de pintar las secciones en pantalla. TypeScript ayuda a que los datos estén mejor controlados. Tailwind da el diseño visual. Vite empaqueta todo para producción. React Router permite que español e inglés tengan URLs propias. Y el script de SEO prepara los metadatos para que Google, LinkedIn y otras plataformas entiendan mejor la página antes incluso de que React termine de cargar.

La arquitectura es deliberadamente sencilla: una landing page moderna, bilingüe, mantenible y lista para desplegarse como sitio estático.
