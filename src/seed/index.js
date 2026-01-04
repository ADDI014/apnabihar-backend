
require("dotenv").config();

const mongoose = require("mongoose");

const seedArts = require("./art");
const seedClothes = require("./clothe");
const seedCuisines = require("./cuisine");
const seedFestivals = require("./festival");
const seedHistory = require("./history");
const seedTemples = require("./temple");
const seedTouristSpots = require("./tourist");

async function connectDB() {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding");
}

async function seedAll() {
    try {
        await connectDB();

        console.log("Starting master seeding process....\n");

        await seedArts();
        await seedClothes();
        await seedCuisines();
        await seedFestivals();
        await seedHistory();
        await seedTemples();
        await seedTouristSpots();

        console.log("\n All data seeded successfully");
        process.exit(0);
    }
    catch(error){
        console.log("Seeding failed: ", error);
        process.exit(1);
    }
}

seedAll();

