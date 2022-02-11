// extarnal imports
const express = require('express');

// internal imports
const { getLogin } = require('../controller/loginController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');

const router = express.Router();

// login page
router.get('/', decorateHtmlResponse('login'), getLogin);
module.exports = router;
