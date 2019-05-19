const winston = require('winston');
const path = require('path');
require('winston-daily-rotate-file');

var logger = {}

function init(config) {
  var transports = [];

  transports.push(
    new winston.transports.DailyRotateFile({
       datePattern: 'YYYY-MM-DD',
      filename: path.join(__dirname,'..', 'logs', '%DATE%-'+config.logging.filename),
      zippedArchive: true,
      maxSize: '20m'
    })
  );

  if (process.env.NODE_ENV === 'local') {
    transports.push(new winston.transports.Console({
      format: winston.format.json(),
      json: true,
      colorize: true,
      level: "silly",

    }));
  }

  logger = winston.createLogger({
    format: winston.format.combine(
      winston.format.colorize(),
      winston.format.json()
    ),
    transports: transports,
    exitOnError: false,
  });
}

module.exports = (config) => {
  if(config != null || config != undefined){
     init(config);
  }

  return logger;
}

