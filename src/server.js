const express = require('express');
const app = express();
const port = 3000;
const path = require('path')
    
app.use(express.static('public'));
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'pug');

app.get('/checkout', (req, res) => {
  res.render('checkout');
});

app.listen(port, () => {
  console.log('running');
});
