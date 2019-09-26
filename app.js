const express = require('express');
const morgan = require('morgan');
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));

app.get('/', (req, res) => {
  res.send('Hello wiorld');
});

const PORT = 6345;

app.listen(PORT, () => {
  console.log(`App listening in port ${PORT}`);
});
