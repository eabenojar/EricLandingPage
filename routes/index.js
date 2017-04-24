var express = require('express');
var router = express.Router();



router.get('/', function(req, res) {
  res.render('index.hbs');
});

router.post('/email', function(req,res){
  res.send('Hello');
})

module.exports = router;
