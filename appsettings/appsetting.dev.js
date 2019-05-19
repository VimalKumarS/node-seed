const path = require('path');
const logPath = path.join(__dirname, '../logs/log.log');

module.exports = {
  web: {
    port: 3000
  },
  logging: {
    logPath: logPath,
    filename: "log.log"
  },
  db:{
    connectionString : "mysql://root:password@127.0.0.1:3306/test",
    type:"mysql",
    logging:false
  }
};