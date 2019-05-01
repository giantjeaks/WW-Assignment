var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

const { ObjectId } = mongoose.Types;
ObjectId.prototype.valueOf = function () {
	return this.toString()
}

var Transaction = new Schema({
    user: {type:ObjectId,ref:'User'} ,
    amount: Number,
    type: String, // income, expense
    remark: String,
    date: Date,
    balance: Number
},{versionKey:false})


module.exports = mongoose.model('Transaction',Transaction);