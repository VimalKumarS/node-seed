const Joi = require('joi');

module.exports = {
 
  createApplication: {
    // POST: 
    body: {
      Application: Joi.string().required(),
      Feature: Joi.string().required(),
      Module: Joi.string().required()
    }
  },
  
};