
var User = require('../Model/User');
var bcrypt = require('bcrypt');



const UserController = {}

UserController.createNewUser = function (req, res) {
    User.create(req.body)
        .then((data) => {
            res.send(data)
        })
}


UserController.login = function (req, res) {
    User.findOne({ username: req.body.username })
        .then((data) => {
            bcrypt.compare(req.body.password, data.password, function (err, result) {
                if (err) {
                    res.status(404).send({ auth: false })
                } else {
                    res.send({ data, auth: true })
                }
            });
        })
}

UserController.findUser =function (req,res) {
    User.findById(req.params.id)
    .then((data) => {
      res.send(data)
    })
}


module.exports = UserController