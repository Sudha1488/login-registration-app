const mongoose = require('mongoose');
console.log("user");

const UserSchema = new mongoose.Schema({
    username:{
        type:String,
        required:true,
        unique:true
    },
    password:{
        type:String,
        required:true,
    }
});
const User = mongoose.model('User',UserSchema);

module.exports = User;

    