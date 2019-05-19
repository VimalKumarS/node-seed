function ApiError(message, statusCode){
  this.message = message;
  this.statusCode = statusCode
}

module.exports = ApiError;