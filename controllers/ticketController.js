const ticketSchema = require('../models/ticketSchema');


const createTicket = async(req , res) =>
{
    const newEntry  = new ticketSchema({
        source : req.body.source , 
        destination: req.body.destination,
        price: req.body.price,
        date: req.body.date,
        createdBy:   req.body.createdBy,       
        ticketBusRoute:   req.body.ticketBusRoute,       
        ticketBusNumber:   req.body.ticketBusNumber,
        ticketCount : req.body.ticketCount , 
        verifyID : req.body.verifyID,
        userID : req.body.userID

    })
    try {
        const postentry = await newEntry.save();
        res.json(postentry);
        
    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
}



async function asyncFunc(req , res , next)
{
    let hotel;
    try {
        
        hotel = await ticketSchema.findById(req.params.id); 
        if(hotel == null)
        {
            return res.status(404).json({message : "The Hotel you are looking for is not found in the database"});
        }

    } catch (error) {
        console.error(error);
        res.status(500).send();
    }

    res.hotel = hotel;
    next()
}

const getAllTickets = async(req , res)=>
{
    try {
        const result = await ticketSchema.find();
        res.json(result)

    } catch (error) {
        console.error(error);
        res.status(500).send();
    }
}




const getOneTicket = async (req, res) => {
    try {
        const Ticket = await ticketSchema.findOne({ verifyID: req.params.ticketid });

        // if (Ticket == null) {
        //     return res.status(404).json({ message: "The Ticket with the given bus number is not found in the database" });
        // }

        res.json(Ticket);
    } catch (error) {
        console.error('Error in get Ticket:', error);
        res.status(500).send();
    }
};
const getUsersTicket = async (req, res) => {
    const userID = req.params.userID;

    try {
      const tickets = await ticketSchema.find({ userID });
      res.json(tickets);
    } catch (err) {
      console.error("Error fetching tickets:", err);
      res.status(500).json({ message: "Server error" });
    }
};


module.exports = {createTicket , getUsersTicket,getAllTickets,asyncFunc , getOneTicket};