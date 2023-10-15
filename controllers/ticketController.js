const ticketSchema = require('../models/ticketSchema');


const createTicket = async(req , res) =>
{
    const newEntry  = new ticketSchema({
        source : req.body.source , 
        destination: req.body.destination,
        price: req.body.price,
        date: req.body.date,
        createdBy:   req.body.createdBy       
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
        
    }

    res.hotel = hotel;
    next()
}


module.exports = {createTicket , asyncFunc};