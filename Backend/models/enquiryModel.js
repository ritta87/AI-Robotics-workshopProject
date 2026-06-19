const mongoose = require('mongoose')

const enquirySchema = new mongoose.Schema({
    name:{
        type:String,
        required:[true,"Name is required."],
        trim:true,
        match: [
        /^[A-Za-z ]{2,50}$/,
        "Name must contain only letters and spaces",
      ],
    },
    email:{
        type:String,
        required:[true,"Email Id is required."],
        trim:true,
        lowercase:true,
        match: [
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        "Please enter a valid email address",
      ],
    },
      phone: {
      type:String,
      required:[true,"Phone number is required."],
      trim:true,
      match: [/^[0-9]{10}$/,"Phone number must be exactly 10 digits."],
    }
},{timestamps:true})

module.exports = mongoose.model("Enquiry",enquirySchema)