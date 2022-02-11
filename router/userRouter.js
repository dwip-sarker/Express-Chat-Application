// extarnal imports
const express = require('express');

// internal imports
const userControler = require('../controller/userController');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');

const router = express.Router();

// users page
router.get('/', decorateHtmlResponse('User'), userControler);
module.exports = router;
