const express = require('express')
const enquiry = require('../controllers/enquiryController')
const router = express.Router()

router.post('/enquiry',enquiry)



module.exports = router