var express = require('express');
var router = express.Router();


router.get('/health', function (req, res, next) {
  res.status(200).json({ 'status': `${process.env.STAGE || 'DEFAULT'} is UP` });
});


router.get('/*', function (req, res, next) {
  res.status(404).json({'message':'No resources'});
});

module.exports = router;
