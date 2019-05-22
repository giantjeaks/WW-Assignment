var Transaction = require('../Model/Transaction');



const TransactionController = {};

TransactionController.createTrans = function(req,res) {
     Transaction.create(req.body)
    .then((data) => {
      res.send(data)
    })
}


TransactionController.getTrans = function(req,res) {
    Transaction.find({ user: req.query.user })
    .then((data) => {
      res.send(data)
    })
}

TransactionController.updateTrans = function(req,res){
    Transaction.findOneAndUpdate({ _id: req.params.id }, req.body,{useFindAndModify:false})
    .then((data) => {
      res.send(data)
    })
}

TransactionController.deleteTrans = function(req,res){
    Transaction.findOneAndRemove({ _id: req.params.id },{useFindAndModify:false})
    .then((data) => {
      res.send(data)
    })
}

module.exports = TransactionController
