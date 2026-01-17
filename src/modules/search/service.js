
const Clothes = require("../clothes/model");
const Temple = require("../temple/model");
const Tourist = require("../tourist/model");
const Festival = require("../festival/model");
const Cuisine = require("../cuisine/model");
const Art = require("../art/model");
const History = require("../history/model");


const MODELS = {
    clothes : Clothes,
    temples : Temple,
    tourist : Tourist,
    festivals : Festival,
    cuisines : Cuisine,
    arts : Art,
    history : History,
}

async function globalSearch({
    q = "",
    category,
    page = 1,
    limit = 10,
    filters = {},
}) {
    const skip = (page - 1) * limit;

    const collections = category ? {[category] : MODELS[category] } : MODELS;

    const results = [];

    for (const [key, Model] of Object.entries(collections)) {
    if (!Model) continue;

    const query = {
      ...(q ? { $text: { $search: q } } : {}),
      ...filters,
    };

    const docs = await Model.find(
      query,
      q ? { score: { $meta: "textScore" } } : {}
    )
      .sort(q ? { score: { $meta: "textScore" } } : { createdAt: -1 })
      .skip(skip)
      .limit(limit)
      .lean();

    results.push(
      ...docs.map(doc => ({
        ...doc,
        category: key,
      }))
    );
  }

  return results;
}

module.exports = { globalSearch };