https://www.concretepage.com/angular-2/ngrx/ngrx-store-4-angular-5-tutorial


Tutorial webpack angular 5 de: https://angular.io/guide/webpack

http://www.edc4it.com/blog/web/helloworld-angular2.html

https://github.com/nguyentk90/angular4-webpack3-seed

https://github.com/gdi2290/angular-starter


https://medium.com/developing-an-angular-4-web-app/setting-up-unit-tests-for-the-root-app-component-f56e6bb72b30

https://github.com/jsified-brains/momentz4ever-web-ng4/tree/seed-ng4-and-unit-tests

http://www.thinksincode.com/2016/07/07/karma-jasmine-webpack.html


https://github.com/aurelia/webpack-plugin/wiki/Using-Webpack-DLL

https://medium.com/@emilycoco/how-to-use-the-dll-plugin-to-speed-up-your-webpack-build-dbf330d3b13c





# MIS NOTAS

* Saco el index.html al raíz, considero que es una buena practica. Se comenta las lineas en webpack base y dev para cambiarlo dentro de src
* Creo carpeta static para meter estáticos del index (iconos, imagenes, etc), no tiene nada que ver con los assets del proyecto
* Una vez arrancado, actualizar dependencias:
  * webpack 4, hay que cambiar los chunks
  * html-webpack-plugin la configuracion cambian en la version 3
  * si se va a meter lodash, usar loader de lodash y exclusivamente importar lo que se use
  * Monment, lo mismo que lodash. Ver artículo: https://iamakulov.com/notes/webpack-front-end-size-caching/
  * Revisar Utils la parte de ngc-webpack con documentacion: https://github.com/shlomiassaf/ngc-webpack#usage
  * 
