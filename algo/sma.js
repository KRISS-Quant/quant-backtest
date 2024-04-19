const sma_addon = require('../cpp_src/build/Release/addon')

async function response(data) {
  if (!data || !data.length) {
    console.error("Error: Data is undefined or doesn't have a length property");
    return res.status(400).send("Invalid data"); // Or handle it appropriately
  }

  const length = data.length;
  const processed_json = JSON.parse(sma_addon.processJsonData(data, length));

  console.log(processed_json);

  return processed_json;
}

module.exports = { response, };
