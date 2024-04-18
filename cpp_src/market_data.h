#ifndef MARKET_DATA_H
#define MARKET_DATA_H

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

enum timeFrame {_1m, _3m, _5m, _15m, _30m, _1h, _2h, _4h, _6h, _8h, _12h, _1d, _3d, _1w, _1M};

class CandleStick{
private:
  timeFrame _timeFrame;
  double _open;
  double _high;
  double _low;
  double _close;
  double _volume;

public:
  CandleStick(timeFrame timeFrame, double open, double high, double low, double close, double volumes) :
    _timeFrame(timeFrame), _open(open), _high(high), _low(low), _close(close), _volume(volumes) {};

  CandleStick(CandleStick& other){
    _timeFrame = other._timeFrame;
    _open = other._open;
    _high = other._high;
    _low = other._low;
    _close = other._close;
    _volume = other._volume;
  }
};

#endif
