
const APIError = require('../utils/apiError');

const AuthMiddleware = () => {
  const auth = (req, res, next) => {

    if (!req.headers['auth-user-id'] && !req.headers['auth-user']) {
      return next(new APIError("Un-Authorized",401));
    }

    req.AuthUserId = req.headers['auth-user-id'];
    req.AuthUser = req.headers['auth-user'];
    return next();

  };
  return {auth};
};

module.exports = AuthMiddleware;