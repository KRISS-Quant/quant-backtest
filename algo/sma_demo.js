async function response(data) {
  if (!data) {
    console.error("Error: Data is undefined or doesn't have a length property");
    return res.status(400).send("Invalid data"); // Or handle it appropriately
  }
  // {
  //   timestamp: 1499040000000, // int, candle opening time
  //       position: 10, // accumulated
  //       cash: 10000,
  //       signal: true
  // }

  let processed_json = {
    id: 0, // int
    data: [ // array 
    ],
    sma_1: [],
    sma_2: []
  };

  let period_1 = data.params.period_1;
  let period_2 = data.params.period_2;
  let percentile = data.params.percentile / 100;
  let cash = data.params.seed;
  let position = 0;
  let cur_value = cash;
  let ticker_data = data.tickers[0];

  let sma_1 = sma_2 = prev_sign = 0;
  let signal, candle;

  for (let i = 0; i < ticker_data.length; i++) {
    candle = ticker_data[i];
    sma_1 += candle.price[3] / period_1;
    sma_2 += candle.price[3] / period_2;
    if (i >= period_1) 
      sma_1 -= ticker_data[i - period_1].price[3] / period_1;
    if (i >= period_2) 
      sma_2 -= ticker_data[i - period_2].price[3] / period_2;
    if (i >= period_1 && i >= period_2) {
      processed_json.sma_1.push({
        timestamp: candle.timestamp[0],
        val: sma_1
      });
      processed_json.sma_2.push({
        timestamp: candle.timestamp[0],
        val: sma_2
      });
      if (Math.sign(sma_1-sma_2) == prev_sign) 
        continue;
      
      prev_sign = Math.sign(sma_1-sma_2);
      cur_value = cash + position * candle.price[3];
      if (Math.sign(sma_1-sma_2) == 1 && cash > cur_value*percentile) { // gloden cross
        let trade_vol = Math.min(cash, cur_value * percentile); 
        position += trade_vol / candle.price[3];
        cash -= trade_vol;
        signal = true; // buy
      }
      else if (position > 0) { // dead cross
        let trade_vol = Math.min(position*candle.price[3], cur_value * percentile); 
        position -= trade_vol / candle.price[3];
        cash += trade_vol;
        signal = false;
      }
      
      processed_json.data.push({
        timestamp: candle.timestamp[0],
        position: position,
        cash: cash,
        signal: signal
      });
    }
  }
  return processed_json;
}

module.exports = { response, };