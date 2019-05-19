'use strict';

const fs = require('fs');
const router = require('express').Router();
const applicationRoutes = require('./applicationRoutes')


router.get('/health-check', (req, res) =>
  //Todo : check for db connect also
  res.send('OK')
);

router.use('/application',applicationRoutes)

module.exports = router;

