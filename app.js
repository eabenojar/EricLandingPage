var express = require('express');
var stormpath = require('express-stormpath');
var handlebars = require('express-handlebars');
var hbs = require('hbs');
var path = require('path');
var routes = require('./routes/index');
var bodyParser = require('body-parser');
var models = require('./models');
var Email = models.Email;


var app = express();
const PORT = process.env.PORT || 4000;

app.use(function(req,res,next){
  if(req.headers['x-forwarded-proto'] === 'http'){
    next();
  } else {
    res.redirect('http://' + req.hostname + req.url);
  }
});

////////View Engine
app.set('view engine', 'hbs');
app.set('views', path.join(__dirname, 'views'));

app.engine('handlebars', handlebars({defaultLayout: 'layout'}));

// Enable form validation with express validator.
var expressValidator = require('express-validator');
app.use(expressValidator());

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//Set Static Folder
app.use(express.static(path.join(__dirname, 'public')));


app.get('/', function(req,res){
  res.render('index');
})

function validate(req) {
  req.checkBody('email', 'Invalid Email').notEmpty();
}

app.post('/email', function(req,res){
  console.log(req.body)
  email = new Email({
      email: req.body.email,
    });
  res.send('Hello');
  validate(req);
  var errors = req.validationErrors();
  if(req.body.title.indexOf('@') >= 0 ){
    email.save(function (err) {
      if (!err) {
        return console.log("created");
      } else {
        return console.log(err);
      }
    });
  } else {
    console.log('Email not valid')
  }
})





app.listen(4000, function(){
  console.log('Success, running on port 3000' +  PORT);
});
