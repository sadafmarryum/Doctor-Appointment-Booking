const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
 name: { type: String, required: true, trim: true },
 email: { type: String, required: true, unique: true },
 pwd: { type: String, required: true, minlength: 4 },
 phoneno: { type: String, required: true },
 address: { type: String, required: true, trim: true },
 birthday: { type: String, format: Date },
 gender: { type: String, enum: ['Male', 'Female'] },
});


const UserModel = mongoose.model("usersinfos", UserSchema);

module.exports =  UserModel;