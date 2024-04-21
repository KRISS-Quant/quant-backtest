function setParamValues(candle_size, model, params = {}) {
    params.timeframe = intervalToInt(candle_size);
    let param_value;
    (document.model_metadata[model].parameters).forEach((param) => {
        param_value = document.getElementById(param.id).value;
        switch (param.type) {
            case "integer":
                params[param.id] = parseInt(param_value);
                break;
            case "double":
                params[param.id] = parseFloat(param_value);
                break;
            case "string":
                params[param.id] = param_value;
                break;
            case "bool":
                params[param.id] = document.getElementById(param.id).checked;
                break;
            default:
                console.log("Invalid type: " + param.type);
                break;
        }
    });
}

function crawlPromise(symbol, candle_size, temp_start_time, temp_end_time) {
    getCandle(symbol, candle_size, temp_start_time, temp_end_time).then((response) => {
        let data = response.map((candle) => {
            return candleDataProcess(candle);
        });
        return data;
    });
}

function updateDataContainter(symbol, candle_size, start_time, end_time, candle_length, promises, data_container) {
    let num_iterations = Math.floor((end_time - start_time) / (candle_length * 1000));
    let max_iterations = Math.ceil((end_time - start_time) / (candle_length * 1000));            
    
    let temp_start_time = start_time;
    let temp_end_time = start_time + candle_length * 1000;

    for (let i = 0; i < num_iterations; i++) {
        promises.push(crawlPromise(symbol, candle_size, temp_start_time, temp_end_time).then((data) => {
            data_container[i] = data;
        })
        );
        temp_start_time = temp_end_time;
        temp_end_time = temp_start_time + candle_length * 1000;
    }
    // last iteration, in case of not full iteration
    if (num_iterations != max_iterations) {
        let final_start_time = start_time + num_iterations * candle_length * 1000;
        promises.push(crawlPromise(symbol, candle_size, final_start_time, end_time).then((data) => {
            data_container[max_iterations - 1] = data;
        })
        );
    }
}