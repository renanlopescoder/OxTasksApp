var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.json());
var load = require('express-load');

//Configurações do Express

//Midleware Static
	
	app.use(express.static('./public')); // aplicando

	load('app/models') // Irá carregar os modelos como no hibernate
	.then('app/api')
	.then('app/routes')
	.into(app);

	module.exports = app; // tornar publico

