'use strict';

const appService = require('../services/applicationService');

const ApplicationController = () => {
  const create = async (req, res, next) => {

    let result;

    try {
      const userData = {
        Application: req.body.Application,
        Feature: req.body.Feature,
        Module: req.body.Module,
        createdby: req.AuthUserId,
        createddate: (new Date()).toISOString()
      };

      
     result = await appService().create(userData);

    } catch (error) {
      return next(error);
    }

    return res.r(result);

  };


  const list = async (req, res, next) => {
    let result;

    try {
      
      result = await appService().list(req.AuthUserId);

    } catch (error) {
      return next(error);
    }

    return res.r(result);
  };



  return {
   create,
   list
  };
};

module.exports = ApplicationController;
