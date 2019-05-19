
const db = require('../db').db;
const logger = require('../utils/logger')()

const ApplicationService = () => {

  const create = async (data) => {
    logger.info(data)
    return new Promise((resolve, reject) => {
      db.Application.create(data).then(model => resolve(model) ).catch(err=> reject(err))

    })
  };

  const list = (requestby) => {
    logger.info(requestby)
    
    return new Promise((resolve, reject) => {
      db.Application.findAll( {  attributes: [
        'id',
        'Application'
]}).then(model => resolve(model) ).catch(err=> reject(err))
    })
  };

 
  return {
   create,
   list
  };
};

module.exports = ApplicationService;