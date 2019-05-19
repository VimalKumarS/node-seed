const correlator = require('express-correlation-id');

module.exports = (app) => {
  app.use(correlator({header: "x-correlation-id"}));
}