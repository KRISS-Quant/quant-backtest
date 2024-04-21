#include"market_data.h"

void returnJSON(Nan::NAN_METHOD_ARGS_TYPE& info, std::vector<TradeData*>& trade_data){
  rapidjson::Document output_document;
  rapidjson::Document::AllocatorType& allocator = output_document.GetAllocator();
  output_document.SetArray();

  for(int i=0;i<trade_data.size();i++){
    rapidjson::Value obj(rapidjson::kObjectType);
    obj.AddMember("position", trade_data[i]->getPosition(), allocator);
    obj.AddMember("timestamp", trade_data[i]->getTimestamp(), allocator);
    obj.AddMember("signal", trade_data[i]->getSignal(), allocator);
    obj.AddMember("pnl", trade_data[i]->getPnl(), allocator);
    output_document.PushBack(obj, allocator);
  }

  rapidjson::StringBuffer buffer;
  rapidjson::Writer<rapidjson::StringBuffer> writer(buffer);
  output_document.Accept(writer);

  info.GetReturnValue().Set(Nan::New(buffer.GetString()).ToLocalChecked());
}

int processJsonData(Nan::NAN_METHOD_ARGS_TYPE info){
  if (info.Length() < 1 || !info[0]->IsObject())
    return -1;

  v8::Local<v8::Object> jsonObj = info[0]->ToObject(Nan::GetCurrentContext()).ToLocalChecked();

  Nan::JSON NanJSON;
  v8::Local<v8::String> jsonString = NanJSON.Stringify(jsonObj).ToLocalChecked();

  Nan::Utf8String utf8Json(jsonString);

  int length = info[1]->IntegerValue(Nan::GetCurrentContext()).ToChecked();

  std::string jsonStringCpp = *utf8Json;

  // Parse using RapidJSON
  if (input_document.Parse(jsonStringCpp.c_str()).HasParseError()) {
    return -2;
  }

  // Ticker ticker1(input_document["id"].GetInt(), length, static_cast<timeFrame>(input_document["timeframe"].GetInt64()), input_document["symbol"].GetString());

  // auto StartTime = std::chrono::system_clock::now();
  // long long StartTimestamp = std::chrono::duration_cast<std::chrono::milliseconds>(StartTime.time_since_epoch()).count();

  // auto EndTime = std::chrono::system_clock::now();
  // long long EndTimestamp = std::chrono::duration_cast<std::chrono::milliseconds>(EndTime.time_since_epoch()).count();

  // std::cout << "Cpp Elapsed Time: " << EndTimestamp - StartTimestamp << " milliseconds\n";
  // returnJSON(info, ticker1);
  return 1;
}

