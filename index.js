var express = require('express');
var app = express();

app.set('view engine', 'ejs');

app.use(express.static('public'));

app.get('/', function(req, res) {
  const params = {
    name: req.query.name || 'Name',
    contact: req.query.contact || 'Number',
    businessLocation: req.query.businessLocation || 'Location',
    amount: req.query.amount || 'Amount'
  };
  
  res.render('pages/index', params);
});

app.listen(8080);
console.log('Server is listening on port 8080');