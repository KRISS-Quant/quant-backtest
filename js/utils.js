async function getTicker(symbol) {
    const url = `https://api.binance.com/api/v3/ticker?symbol=${symbol}`;
    return await fetch(url).then((res) => res.json());
}

async function getCandle(symbol, interval="15m", qty=30) {
    const url = `https://api.binance.com/api/v3/klines?symbol=${symbol}&interval=${interval}&limit=${qty}`;
    return await fetch(url).then((res) => res.json());
}

function pad(val){
    return (val<10) ? '0' + val : val;
}
function toTime(date) {
    return `${pad(date.getHours())}:${pad(date.getMinutes())}:${pad(date.getSeconds())}`;
}