function postToBacktester(model, req_data, ticker_data) {
    req_data.tickers = Object.keys(ticker_data).map((ticker) => {return ticker_data[ticker];});
    document.getElementById("data-container").innerHTML = JSON.stringify(req_data);
    
    return fetch(`/algo/${model}`, {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req_data),
    }).then((response) => {
        return response.json();
    });
}