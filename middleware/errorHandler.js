const expressValidation = require('express-validation');
const log = require('../utils/logger')();

var APIError = require('../utils/apiError')

// TODO ErrorHandler 환경에 따라 분리
module.exports = (app) => {
  const error_code = {
    BAD_REQUEST: 400,
    SERVER_ERROR: 500
  };

  app.use((err, req, res, next) => {

    
    log.error('Error Handler: ', err);
    let reason = false;
    if (err instanceof expressValidation.ValidationError) {  
      reason = err.errors.map(error => error.messages.join('. ')).join('\n');
      
      err = error_code.BAD_REQUEST;
    }else if(err instanceof APIError){
      reason = err.message;
      err= err.statusCode;
    } 
    else if (isNaN(err)) {  
      reason = err.message;
      err = error_code.SERVER_ERROR;
    }

    const response_error = {
      "isSuccess": false,
      "status": err,
      "message": "bad_request"
    };
    response_error.reason = reason ? reason : undefined;

    return res.status(response_error.status).json(
      response_error
    );
  });
};