async function getTicker(symbol) {
    const url = `https://api.binance.com/api/v3/ticker?symbol=${symbol}`;
    return await fetch(url).then((res) => res.json());
}

async function getCandle(symbol, interval="15m", startTime=0, endTime=0) {
    let url = `https://api.binance.com/api/v3/uiKlines?symbol=${symbol}&interval=${interval}`
    if (startTime!=0) 
        url += `&startTime=${startTime}`;
    if (endTime!=0)
        url += `&endTime=${endTime}`;
    return await fetch(url).then((res) => res.json());
}

function pad(val){
    return (val<10) ? '0' + val : val;
}
function toTime(date) {
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}

function intervalToInt(interval) {
    const intervalMap = {
        "1m": 0,
        "3m": 1,
        "5m": 2,
        "15m": 3,
        "30m": 4,
        "1h": 5,
        "2h": 6,
        "4h": 7,
        "6h": 8,
        "8h": 9,
        "12h": 10,
        "1d": 11,
        "3d": 12,
        "1w": 13,
        "1M": 14,
    }
    return intervalMap[interval];
}

function intervalToTimestamp(interval) {
    const intervalMap = {
        "1m": 60000,
        "3m": 180000,
        "5m": 300000,
        "15m": 900000,
        "30m": 1800000,
        "1h": 3600000,
        "2h": 7200000,
        "4h": 14400000,
        "6h": 21600000,
        "8h": 28800000,
        "12h": 43200000,
        "1d": 86400000,
        "3d": 259200000,
        "1w": 604800000,
        "1M": 2592000000,
    }
    return intervalMap[interval];
}

function candleDataProcess(data) {
    let processed_json = {
        timestamp: [
            data[0],      // candle open time
            data[6]       // candle close time
        ],
        price: [
            data[1],       // Open price 
            data[2],       // High price         
            data[3],       // Low price          
            data[4]       // Close price
        ],
        vol: [
            data[5],  // Volume       
            data[7]  // Quote asset volume
        ]    
      };
    return processed_json;
}

function inputValidator() {
    let start_time = new Date(document.getElementById("start-time").value);
    console.log(start_time);
    let end_time = new Date(document.getElementById("end-time").value).getTime();
    console.log(end_time);
    if (isNaN(start_time) || isNaN(end_time) || start_time >= end_time) {
        alert("Invalid Time Range");
        return false;
    }
    return true;
}