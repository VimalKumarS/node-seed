
const path = require('path');

const ENV = process.env.NODE_ENV || 'local';

const envConfig = require(path.join(__dirname, '..' ,'appsettings', 'appsetting.'+ENV));

console.log(envConfig)

const config = Object.assign({
  env: ENV,
}, envConfig);

module.exports = config;