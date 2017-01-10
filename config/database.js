var mongoose = require('mongoose');
mongoose.Promise = global.Promise;
mongoose.connect('mongodb://renanlopes:renanlopes@ds161018.mlab.com:61018/heroku_95b328n7');
// Função para imprimir no console se a conxão com o banco foi efetuada
mongoose.connection.on('connected', function(){
	console.log('Conectado ao Banco MongoDB');
});

//Evitando derrubar aplicação caso não tenha conexão

mongoose.connection.on('error', function(error){
	console.log('Erro na conexão: ' + error);
});

//Evitando derrubar a app Caso perda de conexão
mongoose.connection.on('disconnected', function(){
	console.log('Desconectado do banco MongoDB');
});

// Process pode ser usado em qualquer lugar de nossa aplicação
// process podemos acessar as informações e eventos de nossa app
// este caso estamos acessando o process para saber se a app foi finalizada
// e assim garantir a finalização da conexão com banco

process.on('SIGINT', function(){
	mongoose.connection.close(function(){
		console.log('conexão fechada pelo temino da aplicação');

		//Função esperada por finalização da app
		process.exit(0);
	});
});