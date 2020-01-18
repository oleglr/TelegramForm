var express = require('express');
var router = express.Router();

const formSend = require('../api/form');
router.post('/formsend', formSend.sendMsg);

module.exports = router;
