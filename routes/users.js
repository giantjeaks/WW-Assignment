var express = require('express');
var UserController = require('../Controller/UserController')
var router = express.Router();

/* GET users listing. */
router.get('/ss', function(req, res, next) {
  res.send('respond with a resource');
});


router.get('/:id', (req, res) => {
  // User.findById(req.params.id)
  //   .then((data) => {
  //     res.send(data)
  //   })
  UserController.findUser(req,res);
})

router.post('/login', (req, res) => {
  
  UserController.login(req,res);
})

router.post('/', (req, res) => {
  // console.log(req.body)
  // User.create(req.body)
  //   .then((data) => {
  //     res.send(data)
  //   })
  UserController.createNewUser(req,res);
})
module.exports = router;
