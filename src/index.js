const app = require('express')();
const port = 3000;

app.get('/', (req, res) => {
  res.send('testes');
});

app.listen(port, () => {
  console.log('running');
});
