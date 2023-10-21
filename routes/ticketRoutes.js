const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {createTicket , asyncFunc ,getAllTickets} = require('../controllers/ticketController')


// Create Tikcet
router.post('/' , createTicket)


// Get all tickets
router.get('/' , getAllTickets)

module.exports = router;
  