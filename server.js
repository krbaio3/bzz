const connect = require('connect');
const serveStatic = require('serve-static');

const dirWebRoot = (__dirname + '/dist');
const port = Number(process.env.PORT || 5000);

const app = connect();
// Por partes más claro:
// Decimos a serverStatic que use el directorio dirWebRoot
// Se lo agregamos a la instancia de connect
app.use(serveStatic(dirWebRoot));
// Le decimos que escuche por el puerto de la variable port
app.listen(port);

console.log(`static web server running on port: ${port}`);

// Otra opción:

// Instalar servidor expressjs
// const express = require('express');
// const app = express();

// Decirle que use la carpeta de estaticos dist
// app.use(express.static(__dirname + '/dist'));

// Arranque de app. por el puerto que diga Heroku o el 5000
// app.listen(process.env.PORT || 5000);

// con http-server tambien se puede configurar....
