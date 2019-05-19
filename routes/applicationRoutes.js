const express = require('express');
const validate = require('express-validation');
const paramValidation = require( './parameterValidation');
const appCtrl = require('../controllers/applicationCtrl');
const authMdwr = require('../middleware/auth');
const router = express.Router(); 

router.route('/')

    /** GET /api/v1/application */
    .get(authMdwr().auth, appCtrl().list)

    /** POST /api/v1/application - Create new application */
    .post(authMdwr().auth,validate(paramValidation.createApplication), appCtrl().create);



module.exports = router;
