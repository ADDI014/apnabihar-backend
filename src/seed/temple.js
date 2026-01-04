const fs = require("fs");
const path = require("path");
const Temple = require("../modules/temple/model");

module.exports = async function seedTemples() {
  console.log("Seeding temples...");

  const filePath = path.join(__dirname, "../../data/temples.json");
  const temples = JSON.parse(fs.readFileSync(filePath, "utf-8"));

  for (const temple of temples) {
    const exists = await Temple.findOne({ name: temple.name });

    if (!exists) {
      await Temple.create(temple);
    }
  }

  console.log("Temples seeded");
};
