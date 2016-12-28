var mongoose = require('mongoose');

//Função construtora
var schema = mongoose.Schema({
	//Atributos do documento
	title: {
		type: String,
		required: true
	},
	description : {
		type: String,
		required: false
	},
	active: {
		type: String,
		required: true
	},
	progress: {
		type: String,
		required: true
	} 
});

//Compilando schema

mongoose.model('Task', schema);
