var express = require('express');
var bodyParser = require('body-parser');
var morgan = require('morgan');// a library to get the logs
// dependencies

var calculator = require('./processor/calculator')

app = express();

var port = process.env.PORT || 5000;

app.use(express.static(__dirname));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(morgan('combined'));
//configuring to access different types of json

app.get('/',function(req, res){
  res.sendFile(__dirname+'/index.html');
})
//Get Method at localhost:PORT

app.post('/api', function(req, res){
  var body = req.body

  var first = body.Value
  var second = body.Second_Value
  console.log(JSON.stringify(body));

  calculator.Calculator(body, function(result){
  res.send(result)
  });

})

app.listen(port);
//Port listening
