const mongoose = require("mongoose");
const bcrypt = require("bcryptjs");

const UserSchema = new mongoose.Schema({
 name: {
  type: String,
  required: true,
  trim: true
 },
 email: {
  type: String,
  required: true,
  unique: true,
 },
 pwd:{
  type:String,
  required:true,
  minlength:6
 },
 tokens:[{
  token:{
   type: String,
   required: true,
  }
 }]
});
/// hash password
// UserSchema.pre("save",async function(next){
//   this.pwd = await bcrypt.hash(this.pwd,12);
//   next();
// })
///creating model
const UserModel = new mongoose.model("users",UserSchema);

module.exports = UserModel;