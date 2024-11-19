const mongoose = require("mongoose");

const mongoURL ="mongodb://localhost:27017/user";

mongoose.connect(mongoURL,{
 useUnifiedTopology: true,
 useNewUrlParser:true
})
.then(()=>
console.log("DataBase Connected"))
.catch((errr)=>{
 console.log(errr); 
})

const db = mongoose.connection;
module.exports = db;