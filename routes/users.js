var express = require('express');
var UserController = require('../Controller/UserController')
var router = express.Router();

/* GET users listing. */
router.get('/ss', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:id', (req, res) => {

  UserController.findUser(req,res);
})

router.post('/login', (req, res) => {
  
  UserController.login(req,res);
})

router.post('/', (req, res) => {

  UserController.createNewUser(req,res);
})

module.exports = router;
