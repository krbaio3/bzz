# Generador de Proyectos Front Atmira

[![Atmira](./atmira_logo.png)](http://www.atmira.com/inicio)

## Introducción

Generador de proyectos en Angular 5. Se presupone que se tiene instalado `nodejs` (min 6.x.x), y `npm` (min 5.x.x)

Stack tecnológico:

Angular 5, Webpack 3, Swagger, Karma, Jasmine, ngrx, Protractor

## Indice

1.  [Instalación de Generador](#install)
    1.  [Crear Aplicación](#app)
    2.  [Crear Componente](#component)
2.  [Arranque de aplicación DEMO](#demo)
3.  [Estructura del proyecto](#structure)
4.  [Servidor de Desarrollo Local](#local)
5.  [Descripción del paquetizador](#package)
6.  [Descripción de Testing](#testing)
7.  [Preprocesadores de Estilos](#preprocesador)
8.  [Herramientas de control de calidad de código](#lintado)
9.  [Servidor API mock(swagger)](#swagger)
10. [Dockerfile](#docker)

### <a id="install"></a> Instalación de Generador

Para poder hacer uso del generador, hace falta tener instalado Yeoman de manera global:

```sh
$ npm install --global yo
```

El siguiente paso, es instalar el generador de Atmira:

```sh
$ npm install --global generator-proyect-base-front
```

#### <a id="app"></a> Crear Aplicación

Para crear una nueva estructura de carpetas básicas y su configuración, usaremos el comando:

```sh
$ yo proyect-base-front
```

Esto nos pedirá el **nombre de la aplicación**, el **tipo de aplicación** y una descripción (opcional). Una vez introducidos los datos de la aplicación, se iniciará el proceso de instalación de dependencias mediante **npm**. Es importante respetar el orden de los campos, puesto que en caso de variar el orden, el generador dará un error.

#### <a id="component"></a> Crear de Componentes

Para crear un componente, es necesario usar el comando, **dentro del raiz del proyecto**:

```sh
$ yo proyect-base-front:component
```

Esto nos creará un componente Redux dentro de nuestra carpeta **src**

Para crear un componente "simple" (html, scss, ts y spec):

```sh
$ yo proyect-base-front:componentSingle
```

### <a id="demo"></a> Arranque de aplicación DEMO

En el package.json se han provisto unos scripts para hacer más fácil el arranque de la aplicación:

* "start": Arranca la aplicacion con el servidor de desarrollo
* "start:prod": Construye la aplicación con la configuración de producción y arranca con el serviodor de desarrollo en modo `productión`
* "build": Genera el distribuido con la configuración de producción
* "build:dev": Genera el distribuido con la configuración de desarrollo

Para poder ejecutar cada una de estas instrucciones, es necesario introducir, en el caso de `start`:

```sh
$ npm start
```

Y para el resto:

```sh
$ npm run {build|build:dev|start:prod}
```

### <a id="structure"></a> Estructura de carpetas

Estructura básica de una aplicación de ejemplo:

```sh
├── build
│   ├── builder.js
│   ├── build-prod.js
│   ├── check-versions.js
│   ├── dev-client.js
│   ├── dev-server.js
│   ├── helpers.js
│   ├── utils.js
│   ├── webpack.base.conf.js
│   ├── webpack.dev.conf.js
│   ├── webpack.prod.conf.js
│   └── webpack.test.conf.js
├── config
│   ├── dev.env.js
│   ├── index.js
│   ├── prod.env.js
│   └── test.env.js
├── coverage
│   └── chrome
│       ├── app
│       │   ├── index.html
│       │   └── new.component.ts.html
│       ├── base.css
│       ├── index.html
│       ├── prettify.css
│       ├── prettify.js
│       ├── sort-arrow-sprite.png
│       └── sorter.js
├── e2e
│   ├── protractor.conf.js
│   ├── protractor.root.json
│   ├── spec
│   │   ├── app.e2e-spec.ts
│   │   └── app.po.ts
│   └── tsconfig.e2e.json
├── index.html
├── package.json
├── public
│   └── icon
│       └── favicon.png
├── README.md
├── screenshots
├── src
│   ├── app
│   │   ├── app.component.html
│   │   ├── app.component.scss
│   │   ├── app.component.ts
│   │   ├── app.config.ts
│   │   ├── app.module.ts
│   │   ├── app-routing.module.ts
│   │   ├── core
│   │   │   ├── core.module.ts
│   │   │   ├── nav
│   │   │   │   ├── nav.component.html
│   │   │   │   ├── nav.component.scss
│   │   │   │   └── nav.component.ts
│   │   │   └── service
│   │   │       ├── user-service.config.ts
│   │   │       └── user.service.ts
│   │   ├── home
│   │   │   ├── home
│   │   │   │   ├── home.component.html
│   │   │   │   ├── home.component.scss
│   │   │   │   └── home.component.ts
│   │   │   ├── home.module.ts
│   │   │   ├── home-routing.module.ts
│   │   │   └── service
│   │   │       └── home.service.ts
│   │   ├── new.component.html
│   │   ├── new.component.spec.ts
│   │   ├── new.component.ts
│   │   ├── shared
│   │   │   ├── awesome
│   │   │   │   └── awesome.pipe.ts
│   │   │   ├── highlight
│   │   │   │   └── highlight.directive.ts
│   │   │   └── shared.module.ts
│   │   └── shop
│   │       ├── shop
│   │       │   ├── shop.component.html
│   │       │   ├── shop.component.scss
│   │       │   └── shop.component.ts
│   │       ├── shop.module.ts
│   │       └── shop-routing.module.ts
│   ├── assets
│   │   └── img
│   │       └── angular.png
│   ├── environments
│   │   ├── environment.prod.ts
│   │   ├── environment.ts
│   │   └── model.ts
│   ├── main.ts
│   ├── polyfills.ts
│   ├── styles
│   │   └── main.scss
│   └── vendor.ts
├── test
│   ├── coverage
│   │   └── chrome
│   │       ├── app
│   │       │   ├── index.html
│   │       │   └── new.component.ts.html
│   │       ├── base.css
│   │       ├── index.html
│   │       ├── prettify.css
│   │       ├── prettify.js
│   │       ├── sort-arrow-sprite.png
│   │       └── sorter.js
│   ├── index.ts
│   └── karma.conf.js
├── tsconfig.json
└── tslint.json
```

Definición de carpetas:

* `build` y `config` : Carpetas de configuración del proyecto para los distintos entornos y el servidor local de desarrollo
* `index.html`
* `package.json`
* `.editorconfig`
* `tsconfig.json` : archivo de configuración de TypeScript
* `tslint.json` : archivo de configuración para el linter de TS
* `static` : carpeta de estáticos del proyecto: favicon, iconos según resoluciones (M/T/D), etc
* `src` :
  * `main.ts` : archivo de entrada de la aplicación
  * `polyfills.ts` : archivo que contiene los polyfills necesarios, y los polyfills según entorno
  * `vendor.ts` : archivos de terceros comunes a toda la aplicación.
  * `assets` : carpeta que contiene los assets del proyecto
  * `environments`: carpeta de configuración según entornos
  * `styles` : carpeta que los ficheros de estilos comunes a toda la aplicación.
  * `app` : carpeta que contiene la aplicación en sí misma.

### <a id="local"></a> Servidor de Desarrollo Local

Se ha creado un servidor de desarrollo local basado en `expressjs`, `http-proxy-middleware` y distintos plugins de `webpack`. Es un servidor ligero y rápido, que tiene habilitado el HR.

### <a id="package"></a> Descripción de paquetizador

Se ha usado `webpack` en su versión 3.x.x, para esta primera fase. Se ha dividido en disitntos entornos, teniendo un `webpack.base`, común a todos los entornos, y un `webpack.dev.conf.js` para construir del entorno de desarrollo y `webpack.prod.conf.js` para la construcción de producción, con el apoyo en los ficheros `builder.js`, `helpers.js` y `utils.js` , para su correcto funcionamiento.

Descripción:

    - builder.js
    - build-prod.js
    - check-versions.js
    - dev-client.js
    - dev-server.js
    - helpers.js
    - utils.js
    - webpack.base.conf.js
    - webpack.dev.conf.js
    - webpack.prod.conf.js
    - webpack.test.conf.js

* build-prod.js: script de construccion de la aplicación para producción. Se encarga de disparar el webpack correspondiente.

* check-versions.js: Archivo para checkear las versiones de node y npm que se tienen instaladas, con las que se describen en el package.json.

* dev-client.js: Archivo que contiene el codigo para hacer el reload del servidor cuando se detecten cambios.

* dev-server.js: configuración del servidor de pruebas: express + http-proxy-middleware. Para configurar el proxy, se debe de hacer el ./conf/dev.env.js.

* utils.js: Archivo de utilidades. Contiene assetsPath, que es donde se configura la ruta de los assets y distintas funciones de utilidad que usa webpack

* webpack.base.conf.js: configuracion base para los distintos entornos (desarrollo, test y producción) de webpack.

* webpack.dev.conf.js: configuracion de la lógica de empaquetadop para el entorno de desarrollo. Se hace la llamada aquí para levantar el servidor de pruebas y está configurado para HMR

* webpack.prod.conf.js: configuracion de la lógica de empaquetado para el entorno de producción. Es llamado por el archivo build-prod.

* helpers.js: archivo con funciones de ayuda para la construcción

* webpack.test.conf.js: configuracion de la lógica de empaquetado para el entorno de testing. Es llamado por la configuración de Karma (./test/karma.conf.js), el cual lo usa para poder contruir y realizar la parte de testing

* builder.js: archivo de definición de variables/entry/output de webpack.base.conf.js. Es un archivo más de apoyo.

### <a id="preprocesador"></a> Preprocesadores de hojas de Estilo

Para manejar los estilos, se ha optado por el preprocesador de estilos [Sass](https://sass-lang.com/), por su facilidad, versatilidad, por la potencia y elegancia al que aporta. Nos permite usar variables, reglas anidadas, mixins, importaciones en línea y más, todo con una sintaxis totalmente compatible con CSS.

No obstante, también está preparado para usar [PostCSS](http://postcss.org/), que es una herramienta para transformar estilos con complementos JS. Estos complementos pueden suavizar su CSS, soportar variables y mixins, transpilar la sintaxis futura de CSS, imágenes en línea, y más. Para obtener una perfecta configuración del proyecto, se recomienda instalar los plugins necesarios sabiendo las necesidades del proyecto. Como ejemplo, se han preinstalado los plugins:

* [Autoprefixer](https://github.com/postcss/autoprefixer): Complemento de PostCSS para analizar CSS y agregar prefijos de proveedor a las reglas de CSS usando los valores de CanIuse. Es recomendado por Google y se usa en Twitter y Taobao.
  [UPDATE]: se quita de la configuración porque cssnext ya lo incorpora
* [Precss](https://github.com/jonathantneal/precss): contiene complementos para funciones similares a Sass, como variables, anidamiento y mixins.
* [Import](https://github.com/postcss/postcss-import): Resuelve los imports de SCSS/SASS
* [Cssnext](https://github.com/postcss/postcss-import): es un complemento PostCSS que te ayuda a utilizar la última sintaxis de CSS en la actualidad.
* [precss](https://github.com/jonathantneal/precss): combina variables sintácticas, condicionales e iteradoras similares a Sass, con funciones emergentes de CSS, como funciones de color, propiedades lógicas y personalizadas

### <a id="lintado"></a> Herramientas de control de calidad de código

Se ha dotado a este generador de proyectos Front, con herramientas de calidad de código. Para su control, se ha instalado un linter para Typescript, [TSLint](https://palantir.github.io/tslint/), un linter para Sass, [SassLint]https://github.com/sasstools/sass-lint), y, para el caso de PostCSS, el linter [StyleLint](https://stylelint.io/). Para mayor calidad, se ha preinstalado, el linter basado en AirBnB para [TypeScript](https://github.com/progre/tslint-config-airbnb), y para [Sass](https://github.com/airbnb/css/blob/master/.scss-lint.yml), también se recomienda el linter de AirBnB. En el caso de PostCSS, se ha propuesto el linter recomendado por StyleLint.

Para mejor control sobre la calidad de código, se han incorporado tres scrips en el package.json para que se puedan pasar estos controles. Más adelante, se estudiará la posibilidad de que en la fase de construcción, si el linter da algúnfallo, no construya la aplicación hasta que se arreglen esos fallos. Los `scripts`son:
    * `lint`: escanea el código TypeScript, y 'repara' según las reglas predefinidas en el archivo `tslint.json`
    * `sass`: escanea el código SCSS/SASS, y 'repara' según las reglas predefinidas en el archivo `.scss-lint.yml`
    * `stylelint`: escanea el código PostCSS, y 'repara' según las reglas predefinidas en el archivo `stylelint.json`

Para poder desarrollar un código mantenible, legible, escalable,... se recomienda, a parte de todas las reglas anteriores, seguir la guía de estilos que proporciona [Angular](https://angular.io/guide/styleguide).
### <a id="testing"></a> Descripción de Testing

Para la ejecucion de test unitarios, se ha configurado sobre el [Framework Karma](https://karma-runner.github.io/), en su versión 2.0, y para programación de test, se ha usado [Jasmine](https://jasmine.github.io/)

    Muy importante! Cuando se ha construido el scaffolding, no se podía usar la librería de jasmine-core más actualizada que la versión ~2.99.1, por motivos de compatibilidad con Angular 5, por lo que para que funcionen los test correctamente, no se debe actualizar esta librería.

Los **test unitarios** se encuentran en cada componente y deben de estar declarados como _nombreComponene.component_.**spec**._ts_ para que la lógica que hay implementada, capture todos los archivos de especificación y pueda tratarlos.

La configuración de la lógica se encuentra en la carpeta **./test** (raíz del proyecto), que contiene el archivo _index.ts_ y el archivo _karma.cong.js_. En el archivo _karma.cong.js_ tenemos toda la lógica del runner de test, que se apoya en el fichero _index.ts_, que "recoge y filtra los archivos del proyecto", para su posterior tratamiento por karma, y del archivo de bundlelizador de _webpack.test.conf.js_, el cual empaqueta todos los test de la aplicación. En esta primera iteración, se ha configurado para que funcione con un Chrome con UI, pero más adelante se implementará la opción de un Chrome sin UI.

En esta configuración, también tenemos la cobertura de código, el cual está habilitada para que "falle" si se encuentra por debajo del 75% de cobertura tanto en bucles como código. Esta parte se puede modificar cambiando el valor de las variables dentro del karma.conf.js, aunque no se recomienda modificar nada. El Reporte de salida se entra dentro de la carpeta **./test/coverage**, que a su vez contiene una carpeta generada por el nombre del navegador configurado para las pruebas. Para poder visualizar el reporte, se puede usar una librería como **http-server** indicando la carpeta _./test/coverage/nombreNavegador_ para visualizarlo en el navegador (la misma configuración para un servidor de integración contínua).

Para la ejecución de test End-to-End (e2e), se ha usado el [Framework Protractor](http://www.protractortest.org/#/), especializado en la parte de Angular. La configuración se encuentra en la carpeta **./e2e**, que contiene una carpeta de _especificaciones de test_ (/spec) y la configuración propia del framework protractor en (_protractor.conf.js_). También se ha configurado los reportes de los test e2e teniendo su salida en la carpeta **./protractorReport**, y para su visualización mediante navegador, se puede proceder de forma parecida que en el anterior caso, usando una librería que levante un servidor ligero como **http-server** indicando la carpeta _./protractorReport_ para visualizarlo en el navegador (la misma configuración para un servidor de integración contínua).

### <a id="swagger"></a> Servidor API mock

### <a id="docker"></a> Dockerfile
