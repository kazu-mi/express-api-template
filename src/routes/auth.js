var express = require('express');

var router = express.Router();


router.post('/hello', function (req, res) {
  res.send(JSON.stringify(
    {
      'message': 'hello',
    }
  ));
});

module.exports = router;
