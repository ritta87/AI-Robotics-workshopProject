const express = require('express')
const Enquiry = require('../models/enquiryModel')
async function enquiryControl(req,res){
try{
    const {name,email,phone} = req.body
    const trimmedName = name?.trim()
    const trimmedEmail = email?.trim().toLowerCase()
    const trimmedPhone = String(phone||"").trim()

    //Required fields
    if (!trimmedName || !trimmedEmail || !trimmedPhone) {
      return res.status(400).json({
        success:false,
        message:"Name, email and phone are required"
      })
    }
//Name validation
    const nameRegex = /^[A-Za-z ]{2,50}$/

    if (!nameRegex.test(trimmedName)) {
      return res.status(400).json({
        success:false,
        message:"Name must contain only letters and spaces (2-50 characters)",
      })
    }
    //Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

    if (!emailRegex.test(trimmedEmail)) {
      return res.status(400).json({
        success: false,
        message:"Please enter a valid email address",
      })
    }

    //Phone validation
    const phoneRegex = /^[0-9]{10}$/;

    if (!phoneRegex.test(trimmedPhone)) {
      return res.status(400).json({
        success:false,
        message:"Phone number must contain exactly 10 digits",
      })
    }
    const enquiry = await Enquiry.create({
        name:trimmedName,
        email:trimmedEmail,
        phone:trimmedPhone
    })
    res.status(201).json({
        success:true,
        message:"Enquiry submitted successfully!",
        data:enquiry
    })
}catch(error){
     console.error(error)

    return res.status(500).json({
      success:false,
      message:"Internal server error"
    })
}

}
module.exports = enquiryControl