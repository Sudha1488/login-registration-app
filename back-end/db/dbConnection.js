const mongoose = require('mongoose');
const connectDB = async() => {
    try{
        await mongoose.connect('mongodb://localhost:27017/myDB');
        console.log('Connected to MongoDB'); 
    }
    catch(error){
        console.log(error);
    }
}
console.log("dbConnection");
module.exports = connectDB;