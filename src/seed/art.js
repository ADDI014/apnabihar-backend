const fs = require("fs");
const path = require("path");
const Art = require("../modules/art/model");
const slugify = require("../utils/slugify");

module.exports = async function seedArts() {
    console.log("Seeding arts.....");

    const filePath = path.join(__dirname, "../../data/arts.json");

    const arts = JSON.parse(fs.readFileSync(filePath, "utf-8"));

    for(const art of arts) {
        const exists = await Art.findOne({name : art.name});

        if(!exists){
            await Art.create({
                ...art,
                slug : slugify(art.name)
            });
        }
    }

    console.log("Arts seeded");
}

