// extarnal imports
const express = require('express');

// internal imports
const inboxContoller = require('../controller/inboxContoller');
const decorateHtmlResponse = require('../middleware/common/decorateHtmlResponse');

const router = express.Router();

// users page
router.get('/', decorateHtmlResponse('inbox'), inboxContoller);

module.exports = router;
