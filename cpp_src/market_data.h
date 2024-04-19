#ifndef MARKET_DATA_H
#define MARKET_DATA_H

#include<iostream>
#include<vector>
#include<node.h>
#include<nan.h>
#include<v8.h>
#include<rapidjson/document.h>
#include<rapidjson/stringbuffer.h>
#include<rapidjson/writer.h>

// [
//     {
//       timestamp:
//         [1499040000000,      // Kline open time
//       1499644799999],      // Kline Close time
//       price: ["0.01634790",       // Open price
//       "0.80000000",       // High price
//       "0.01575800",       // Low price
//       "0.01577100"],       // Close price
//       vol: ["148976.11427815",  // Volume
//       "2434.19055334"]    // Quote asset volume
//     }
//   ]
// ]

typedef long long ll;

enum timeFrame {_1m, _3m, _5m, _15m, _30m, _1h, _2h, _4h, _6h, _8h, _12h, _1d, _3d, _1w, _1M};

class CandleStick{
private:
  ll _timestamp;
  double _open;
  double _high;
  double _low;
  double _close;
  double _volume;

public:
  CandleStick(ll timestamp, double open, double high, double low, double close, double volumes) :
     _timestamp(timestamp), _open(open), _high(high), _low(low), _close(close), _volume(volumes) {};

  CandleStick(CandleStick& other){
    _timestamp = other._timestamp;
    _open = other._open;
    _high = other._high;
    _low = other._low;
    _close = other._close;
    _volume = other._volume;
  }

};

class Ticker{
private:
  std::string _symbol;
  std::vector<CandleStick> data;
  timeFrame _timeFrame;

public:

};

#endif
