const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {createBus , asyncFunc ,getBus, getAllBus} = require('../controllers/busController')


// Create Tikcet
router.post('/' , createBus)


router.get('/:busRoute' , getBus)


// get all buses
router.get('/',getAllBus)
module.exports = router;
  