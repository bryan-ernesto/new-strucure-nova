const express = require('express');
// eslint-disable-next-line import/no-extraneous-dependencies
const cors = require('cors');
const { routerApi } = require('./routes/index');

const app = express();
const port = 3000;

app.use(express.json());

const whitelist = ['http://localhost:5500', 'https://myapp.co'];
const options = {
  origin: (origin, callback) => {
    if (whitelist.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error('No permitido'));
    }
  },
};

app.use(cors(options));

app.get('/api', (req, res) => {
  res.send('Hello World');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Nueva ruta');
});

routerApi(app);

app.listen(port, () => {
  console.log(`Server on port ${port}`);
});
