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
#include"nan_maybe_43_inl.h"
#include"v8-local-handle.h"
#include<chrono>

typedef long long ll;

enum timeFrame {_1m, _3m, _5m, _15m, _30m, _1h, _2h, _4h, _6h, _8h, _12h, _1d, _3d, _1w, _1M};

class CandleStick{
private:
  ll _timestamp_begin;
  ll _timestamp_end;
  double _open;
  double _high;
  double _low;
  double _close;
  double _volume;

public:
  explicit CandleStick(ll timestamp_begin, ll timestamp_end, double open, double high, double low, double close, double volumes) :
     _timestamp_begin(timestamp_begin), _timestamp_end(timestamp_end), _open(open), _high(high), _low(low), _close(close), _volume(volumes) {};

  CandleStick(const CandleStick& other){
    _timestamp_begin = other._timestamp_begin;
    _timestamp_end = other._timestamp_end;
    _open = other._open;
    _high = other._high;
    _low = other._low;
    _close = other._close;
    _volume = other._volume;
  }

  ll getStartTimestamp() const { return _timestamp_begin; }
  ll getEndTimestamp() const   { return _timestamp_end; }
  double getOpen() const       { return _open; }
  double getHigh() const       { return _high; };
  double getLow() const        { return _low; };
  double getClose() const      { return _close; };
  double getVolume() const     { return _volume; };
};

class Ticker{
private:
  int id;
  int length;
  timeFrame _timeFrame;
  std::string _symbol;
  std::vector<CandleStick> data;

public:
  explicit Ticker(int id, int length, timeFrame timeFrame, std::string symbol) : id(id), length(length), _timeFrame(timeFrame), _symbol(symbol) {};

  CandleStick& operator[](int index){
    return data[index];
  }

  int getId() const              { return id; }
  int getLength() const          { return length; }
  timeFrame getTimeFrame() const { return _timeFrame; }
  std::string getSymbol() const  { return _symbol; }

  void addCandleStick(CandleStick& candleStick){
    data.push_back(candleStick);
  }
};

class TradeData{
private:
  double position;                // % of aseets
  ll timestamp;                   // timestamp of the trade
  int signal;                     // 1 for buy, 0 for hold, -1 for sell
  double pnl;                     // % of pnl made

public:
  explicit TradeData(double position, ll timestamp, int signal=0, double pnl=0) : position(position), timestamp(timestamp), signal(signal), pnl(pnl) {};

  double getPosition() const { return position; }
  ll getTimestamp() const { return timestamp; }
  int getSignal() const { return signal; }
  double getPnl() const { return pnl; }

  void setSignal(int signal) { this->signal = signal; }
  void setPnl(double pnl) { this->pnl = pnl; }
  void updatePnl(double pnl) { this->pnl += pnl; }
};

int processJsonData(Nan::NAN_METHOD_ARGS_TYPE info);
void returnJSON(Nan::NAN_METHOD_ARGS_TYPE& info, std::vector<TradeData*>& trade_data);

extern rapidjson::Document input_document;

#endif
