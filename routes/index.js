var express = require('express');
var User = require('../Model/User');
var Transaction = require('../Model/Transaction');
var router = express.Router();
var TransactionController = require('../Controller/TransactionController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/', (req, res) => res.send('hello'))



router.get('/transactions', (req, res) => {
  // Transaction.find({ user: req.query.user })
  //   .then((data) => {
  //     res.send(data)
  //   })
  TransactionController.getTrans(req,res)
})

router.post('/transactions', (req, res) => {
  // Transaction.create(req.body)
  //   .then((data) => {
  //     res.send(data)
  //   })
  TransactionController.createTrans(req,res);
})

router.put('/transactions/:id', (req, res) => {
  // Transaction.findOneAndUpdate({ _id: req.params.id }, req.body)
  //   .then((data) => {
  //     res.send(data)
  //   })
  TransactionController.updateTrans(req,res)
})

router.delete('/transactions/:id', (req, res) => {
  // Transaction.findOneAndRemove({ _id: req.params.id })
  //   .then((data) => {
  //     res.send(data)
  //   })
  TransactionController.deleteTrans(req,res)
})

module.exports = router;