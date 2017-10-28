const router = require('express').Router();

router.use('/levels', require('./levels'));

module.exports = router;
