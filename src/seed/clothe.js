const fs = require("fs");
const path = require("path");
const Clothing = require("../modules/clothes/model");
const slugify = require("../utils/slugify");

async function seedClothes() {
  console.log("Seeding clothes data...");

  const filePath = path.join(__dirname, "../../data/clothes.json");
  const clothes = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  for (const item of clothes) {
    const exists = await Clothing.findOne({ name: item.name });

    if (!exists) {
      await Clothing.create({
        ...item,
        slug : slugify(`${item.name} bihar`)
      });
    }
  }

  console.log("Clothes seeding completed");
}

module.exports = seedClothes;

