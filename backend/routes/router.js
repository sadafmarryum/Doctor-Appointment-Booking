const express = require("express");
const router = new express.Router();
const UserModel = require("../models/UserSchema");

// For user registration
router.post("/register", async (req, res) => {
 try {
  const { name, email, pwd, cpwd } = req.body;
  const existEmail = await UserModel.findOne({ email });
  if (existEmail) {
   return res.status(400).json({ error: "Email already exists" });
  }

  if (pwd !== cpwd) {
   return res.status(400).json({ error: "Password and Confirm Password Not Match" })
  }
  // store data (multiple times) in new instance
  const newUser = new UserModel({ name, email, pwd, cpwd });
  // store data in db
  await newUser.save();
  //data is save with pwd hash
  res.status(201).json({ message: "User registered successfully" });
 }

 catch (error) {
  console.error("Error registering user:", error);
  res.status(500).json({ error: "Internal server error" });
 }
});

// For user login
router.post("/login", async (req, res) => {
 try {
  const { email, pwd } = req.body;

  const user = await UserModel.findOne({ email });
  if (!user) {
   return res.status(400).json({ error: "Invalid email " });
  }

  const isMatch = pwd === user.pwd;
  if (!isMatch) {
   return res.status(400).json({ error: "Invalid password" });
  }
  res.status(200).json({ message: "Login successfull", user });
 }
 catch (error) {
  res.status(500).json({ error: "Internal server error" });
 }
});


router.get('/user/:email', async (req, res) => {
 const { email } = req.params;
 try {
  // user name from database based on email
  const user = await UserModel.findOne({ email });
  if (user) {
   const { name } = user;
   res.status(200).json({ name});
  } else {
   res.status(404).json({ error: "User not found" });
  }
 } catch (error) {
  res.status(500).json({ error: "Internal server error" });
 }
});

router.delete('/user/:email', async (req, res) => {
 try {
  const email = req.params.email;
  const result = await UserModel.deleteOne({ email });
  // deletedCount(insure that del)
  if (result.deletedCount > 0) {
   res.status(200).json({ message: 'User deleted successfully' });
  } 
  else {
   res.status(404).json({ message: 'User not found' });
  }
 } 
 catch (error) {
  console.error("Error deleting user:", error);
  res.status(500).json({ message: 'Server error' });
 }
});


module.exports = router;