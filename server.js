const express = require('express'),
      mongoose = require('mongoose'),
      bodyParser = require('body-parser'),
      path = require('path'),
      port = process.env.PORT || 8080,
      methodOverride = require('method-override'),
      app = express(),
      router= express.Router();

mongoose.connect('mongodb://localhost/comidarapida', function(err, res){
  if (err) console.log('Error conectando a la base de datos') + err;
  else console.log('conexion a la base de datos exitosa')
});


// serve static assets normally
app.use(express.static(__dirname));

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(methodOverride());
app.use(router);


// handle every other route with index.html, which will contain
// a script tag to your application's JavaScript file(s).

app.get('/home', function(req, res) {
   res.send('Hello World!');
});


app.get('*', function (req, res){
  res.sendFile(path.resolve(__dirname,'web', 'index.html'));
});

require('./routes/routes.js')(app);


app.listen(port);
console.log('Puerto iniciado en http://localhost:' + port);
