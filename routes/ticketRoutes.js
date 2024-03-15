const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {createTicket , asyncFunc ,getAllTickets , getOneTicket} = require('../controllers/ticketController')


// Create Tikcet
router.post('/' , createTicket)


// Get all tickets
router.get('/' , getAllTickets)


router.get('/:ticketid' , getOneTicket)
 
module.exports = router;
  