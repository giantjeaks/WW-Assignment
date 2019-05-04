var express = require('express');
var router = express.Router();
var TransactionController = require('../Controller/TransactionController');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});


router.get('/', (req, res) => res.send('hello'))



router.get('/transactions', function(req, res){

  TransactionController.getTrans(req,res)
})

router.post('/transactions', function(req, res){

  TransactionController.createTrans(req,res);
})

router.put('/transactions/:id', function(req, res){

  TransactionController.updateTrans(req,res)
})

router.delete('/transactions/:id',function(req, res){

  TransactionController.deleteTrans(req,res)
})

module.exports = router;