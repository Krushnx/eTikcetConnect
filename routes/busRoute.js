const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {createBus , asyncFunc ,getBus, getAllBus} = require('../controllers/busController')


// Create Tikcet
router.post('/' , createBus)


// Get all tickets
router.get('/:busRoute' , getBus)


// get all buses
router.get('/',getAllBus)
module.exports = router;
  