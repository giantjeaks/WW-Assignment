var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var user = new Schema({
    username: {type:String,required:true} ,
    password: {type:String,required:true}
},{versionKey:false})

user.pre('save',function (next){
    var use = this
    bcrypt.hash(use.password,8,function(err,hash){
        // console.log('im pre save')
        if(err){
            return next(err);
        }
        use.password = hash;
        next();
    });
});

module.exports = mongoose.model('User',user);