const sma_addon = require('../../cpp_src/build/Release/sma_addon')

async function response(data) {
  try {
    if (!data || !data.data.length) {
      console.error("Error: Data is undefined or doesn't have a length property");
      return res.status(400).send("Invalid data"); // Or handle it appropriately
    }

    const length = data.data.length;
    const processed_json = JSON.parse(sma_addon.main_func(data, length));

    console.log(processed_json);

    return processed_json;
  } catch {
    console.log("Error running cpp:", error);
  }
}

module.exports = { response, };
