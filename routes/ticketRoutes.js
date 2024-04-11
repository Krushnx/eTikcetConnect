const express = require('express')
const router = express.Router();
const auth = require('../middleware/auth')
const {createTicket , asyncFunc ,getUsersTicket,getAllTickets , getOneTicket} = require('../controllers/ticketController')


// Create Tikcet
router.post('/' , createTicket)


// Get all tickets
router.get('/' , getAllTickets)


router.get('/:ticketid' , getOneTicket)
router.get('/user/:userID' , getUsersTicket)
 
module.exports = router;
  