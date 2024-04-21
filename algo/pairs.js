async function response(data) {
  if (!data) {
    console.error("Error: Data is undefined or doesn't have a length property");
    return res.status(400).send("Invalid data"); // Or handle it appropriately
  }

  let processed_json = {
	id: 0, // int
	data: [ // array
		{
		    timestamp: 1499040000000, // int, candle opening time
            position: "10",
            cash: "10000",
            signal: true
		}
	]
};

  return processed_json;
}

module.exports = { response, };