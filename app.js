const express = require('express');
const morgan = require('morgan');
const app = express();

const models = require('./models');
let user = require('./routes/user');
let wiki = require('./routes/wiki');

app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(morgan('dev'));
app.use(express.static(__dirname + '/public'));
app.use('/wiki', wiki);
app.use('/users', user);

app.get('/', (req, res) => {
  res.redirect('/wiki');
});

const PORT = 3000;

const init = async () => {
  await models.db.sync({ force: true });
  app.listen(PORT, () => {
    console.log(`server is listening on port ${PORT}`);
  });
};
init();
