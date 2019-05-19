const express = require('express');
const chalk = require('chalk');
const path = require('path');
const logger = require('morgan');
const cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');

const compress = require('compression');
const methodOverride = require('method-override');

const cors = require('cors');
const config = require('../utils/config');
const APIError = require('../utils/apiError');
var app = express();

const env = process.env.NODE_ENV;
if (env === undefined) {
  console.log(`NODE_ENV is ${env}`);
  console.log('SET NODE_EV!!! development or test or production');
  process.exit(1);
}

const port = config.web.port;

require('../utils/logger')(config)
require('../utils/morganLogger')(app)

const db = require('../db');
db.init(config);

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));
app.use(cookieParser());
app.use(compress());
app.use(methodOverride());

app.use((req, res, next) => {
  res.r = (result) => {
    res.json({
      isSuccess: true,
      status: 200,
      message: 'success',
      result,
    });
  };
  next();
});


// CORS ALL ACCESS
app.use(cors());
require('../middleware/correlationid')(app);

// Get API Version from .env (or else assume 1.0)
app.get('/favicon.ico', (req, res) => res.status(204))
const baseUrl = `${config.apiVersion}`;
app.use(`${baseUrl}`, require ('../routes'));


//404
app.use((req, res, next) => {
  const err = new APIError('Invalid request',404);
  return next(err);
});

// error handler
require('../middleware/errorHandler')(app);

app.listen(port, () => {
  // model.sequelize.sync();
  console.info(`[ApiServer] Listening on Port ${port} / at ${env} Env`);
});

module.exports = app;