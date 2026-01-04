
const fs = require("fs");
const path = require("path");

const TouristSpot = require("../modules/tourist/model");

module.exports = async function seedTouristSpots() {
    console.log("Seeding tourist spots.......");

    const filePath = path.join(__dirname, "../../data/tourists.json");

    const touristData = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    for(const spot of touristData) {
        const exists = await TouristSpot.findOne({name : spot.name});

        if(!exists) {
            await TouristSpot.create(spot);
        }
    }

    console.log("Tourist spots seeded");
}



