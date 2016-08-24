var express = require('express');
var app = express();
var logger = require('./logger');
var aRoute = require('./app/routes/a-route');


var topLevelPath = __dirname;
GLOBAL.topLevelPath = topLevelPath;
console.log(GLOBAL.topLevelPath);
// console.log(GLOBAL);
// module.exports = topLevelPath;

// app.use(express.static('app'));

//middleware
app.use(logger);

app.use(function(request, response, next){
  console.log('using middleware foo');
  next();
});

app.use(function(request, response, next){
  console.log('using middleware bar');
  next();
});


//routes
	//Home route
	app.get('/', function(request, response) {
		response.sendFile(__dirname + '/app/views/index.html');
	});

	//Static File Route
	app.get('/terry', function(request, response) {
		response.sendFile(__dirname + '/app/public/terry.jpg');
    //response.write('terry? are you there?');
	});

	//testing route Route
	app.use('/routes', aRoute);
/*	
	app.route('/routes')
		.get(function(request, response) {
		response.sendFile(__dirname + '/app/views/routes.html');
	});
*/

//Open port to listen on
app.listen(3000, function() {
	console.log('server listening on Port 3000');
});

/*
app.get('/', function(request, response) {
	//response.send('Hello Terry\'s world');
	response.write('writing something foo');
	response.end();
});
*/

/*
var http = require('http');

function onRequest(request, response) {
	console.log('user made a request' + request.url);
	response.writeHead(200, {"Context-Type":"text/plain"});
	response.write('here is the response');
	response.end();
}

http.createServer(onRequest).listen(3000);
console.log('server is running');
*/