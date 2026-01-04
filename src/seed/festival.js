
const fs = require("fs");

const path = require("path");

const Festival = require("../modules/festival/model");

module.exports = async function seedFestivals() {
    console.log("Seeding festivals......");

    const filePath = path.join(__dirname, "../../data/festivals.json");

    const festivals = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    for(const festival of festivals){
        const exists = await Festival.findOne({name : festival.name});

        if(!exists){
            await Festival.create(festival);
        }
    }

    console.log("Festivals seeded");
}

