const fs = require("fs");

const path = require("path");

const Cuisine = require("../modules/cuisine/model");

module.exports = async function seedCuisines() {
    console.log("Seeding cuisines.....");


    const filePath = path.join(__dirname, "../../data/cuisines.json");
    
    const cuisines = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    for(const cuisine of cuisines){
        const exists = await Cuisine.findOne({name : cuisine.name});

        if(!exists) {
            await Cuisine.create(cuisine);
        }
    }

    console.log("Cuisines seeded");
}