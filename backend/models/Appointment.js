const mongoose = require("mongoose");

const appointmentSchema = new mongoose.Schema({
 userEmail: {type: String,required: true},
 doctorImage: {type:String},
 doctorName: {type: String,required: true},
 doctorSpecialist: {type: String,required: true},
 doctorAddress: {type: String,required: true},
 appointmentFee: {type: String,required: true},
 day: {type: String,required: true},
 date: {type: Number,required: true},
 month: {type: String,required: true},
 year: {type: Number,required: true},
 time: {type: String,required: true},
});

const AppointmentModel = mongoose.model("appointments", appointmentSchema);

module.exports =  AppointmentModel ;