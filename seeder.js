

const mongoose = require('mongoose');

require('dotenv').config();

const {touristSpots} = require('./data/data');

const TouristSpot = require('./models/touristModel');

const importData = async () => {
    try {
        await mongoose.connect(process.env.MONGO_URI);
        console.log("mongodb connected for seeding");

        await TouristSpot.deleteMany();
        
        await TouristSpot.insertMany(touristSpots);

        console.log("Data imported successfully");

        process.exit();

    }
    catch(err) {
        console.log(`Error with data import: ${err} `);
        process.exit(1);
    }
}

importData();

