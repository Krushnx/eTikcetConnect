const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {createTicket , asyncFunc} = require('../controllers/ticketController')


// Create Tikcet

router.post('/' , createTicket)


module.exports = router;
  