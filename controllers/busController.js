const Bus = require('../models/busSchema');

const createBus = async (req, res) => {
    const newEntry = new Bus({
        busRoute: req.body.busRoute,
        source: req.body.source,
        destination: req.body.destination,
        stops: req.body.stops,
        prices: req.body.prices,
        timetable : req.body.timetable
    });

    try {
        const postentry = await newEntry.save();
        res.json(postentry);
    } catch (error) {
        console.error('Error in createBus:', error);
        res.status(500).send();
    }
};

async function asyncFunc(req, res, next) {
    let bus;
    try {
        bus = await Bus.findById(req.params.id);
        if (bus == null) {
            return res.status(404).json({ message: "The Bus you are looking for is not found in the database" });
        }
    } catch (error) {
        console.error('Error in asyncFunc:', error);
        res.status(500).send();
    }

    res.bus = bus;
    next();
}

const getAllBus = async (req, res) => {
    try {
        const result = await Bus.find();
        res.json(result);
    } catch (error) {
        console.error('Error in get all bvus:', error);
        res.status(500).send();
    }
}

const getBus = async (req, res) => {
    try {
        const bus = await Bus.findOne({ busRoute: req.params.busRoute });

        if (bus == null) {
            return res.status(404).json({ message: "The Bus with the given bus number is not found in the database" });
        }

        res.json(bus);
    } catch (error) {
        console.error('Error in get bus:', error);
        res.status(500).send();
    }
};

module.exports = { createBus, getAllBus, asyncFunc, getBus };
