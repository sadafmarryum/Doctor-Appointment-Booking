const express = require("express");
const router = new express.Router();
const UserModel = require("../models/UserSchema");

// For user registration
router.post("/register", async (req, res) => {
 try {
  const { name, email, pwd } = req.body;

  const existEmail = await UserModel.findOne({ email });
  if (existEmail) {
   return res.status(400).json({ error: "Email already exists" });
  }
  // store data multiple times
  const newUser = new UserModel({ name, email, pwd });

  // store data in db
  await newUser.save();
  //data is save with pwd hash
  console.log(newUser);
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
  res.status(200).json({ message: "Login successful", user });
 } 
 catch (error) {
  console.error("Error during login:", error);
  res.status(500).json({ error: "Internal server error" });
 }
});
 
module.exports = router;