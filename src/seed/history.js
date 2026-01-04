const fs = require("fs");
const path = require("path");
const History = require("../modules/history/model");
const slugify = require("../utils/slugify");

async function seedHistory() {
  console.log("Seeding history");

  const filePath = path.join(__dirname, "../../data/history.json");
  const histories = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  for (const item of histories) {
    const exists = await History.findOne({ name: item.name });

    if (!exists) {
      await History.create({
        ...item,
        slug : slugify(item.name)
      });
    }
  }

  console.log("History seeding completed");
}

module.exports = seedHistory;
