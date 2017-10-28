const router = require('express').Router();

const { Level } = require('../db').models;

router.get('/:id', (req, res, next) => {
  Level.findLevel(req.params.id)
  .then(level => res.send(level))
  .catch(next);
});

module.exports = router;
