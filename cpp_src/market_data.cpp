#include<iostream>
#include"market_data.h"
#include"nan.h"
#include"nan_maybe_43_inl.h"
#include"v8-local-handle.h"
#include<chrono>

NAN_METHOD(processJsonData){
  if (info.Length() < 1 || !info[0]->IsObject())
    return Nan::ThrowError("Invalid JSON data");

  v8::Local<v8::Object> jsonObj = info[0]->ToObject(Nan::GetCurrentContext()).ToLocalChecked();

  // Convert V8 object to JSON string
  // Nan::MaybeLocal<v8::String> Nan::JSON::Stringify(v8::Local<v8::Object> json_object, v8::Local<v8::String> gap = v8::Local<v8::String>());
  Nan::JSON NanJSON;
  v8::Local<v8::String> jsonString = NanJSON.Stringify(jsonObj).ToLocalChecked();
  // Nan::MaybeLocal<v8::String> Nan::JSON::Stringify(v8::Local<v8::Object> json_object, v8::Local<v8::String> gap = v8::Local<v8::String>());
  
  // v8::Local<v8::String> jsonStr = jsonString.ToLocalChecked();

  // Convert to UTF-8 string
  Nan::Utf8String utf8Json(jsonString);

  int length = info[1]->IntegerValue(Nan::GetCurrentContext()).ToChecked();

  std::string jsonStringCpp = *utf8Json;

  // Parse using RapidJSON
  rapidjson::Document input_document;
  if (input_document.Parse(jsonStringCpp.c_str()).HasParseError()) {
    return Nan::ThrowError("JSON parsing error");
  }

  auto StartTime = std::chrono::system_clock::now();
  long long StartTimestamp = std::chrono::duration_cast<std::chrono::milliseconds>(StartTime.time_since_epoch()).count();

  std::vector<double> open;
  std::vector<double> high;
  std::vector<double> low;
  std::vector<double> close;
  std::vector<double> volume;

  for(int i=0;i<10;i++){
    // CandleStick *tmp = new CandleStick(document[i]["timestamp"][0].GetInt64(), document[i]["open"].GetDouble(), document[i]["high"].GetDouble(), document[i]["low"].GetDouble(), document[i]["close"].GetDouble(), document[i]["volume"].GetDouble());
    open.push_back(input_document[i]["open"].GetDouble());
    high.push_back(input_document[i]["high"].GetDouble());
    low.push_back(input_document[i]["low"].GetDouble());
    close.push_back(input_document[i]["close"].GetDouble());
    volume.push_back(input_document[i]["volume"].GetDouble());
  }

  for(int i=0;i<10;i++)
    open[i] = 50;

  auto EndTime = std::chrono::system_clock::now();

  long long EndTimestamp = std::chrono::duration_cast<std::chrono::milliseconds>(EndTime.time_since_epoch()).count();

  std::cout << "Cpp Elapsed Time: " << EndTimestamp - StartTimestamp << " milliseconds\n";

  rapidjson::Document output_document;
  rapidjson::Document::AllocatorType& allocator = output_document.GetAllocator();
  output_document.SetArray();

  for(int i=0;i<10;i++){
    rapidjson::Value obj(rapidjson::kObjectType);
    obj.AddMember("open", open[i], allocator);
    obj.AddMember("high", high[i], allocator);
    obj.AddMember("low", low[i], allocator);
    obj.AddMember("close", close[i], allocator);
    obj.AddMember("volume", volume[i], allocator);
    output_document.PushBack(obj, allocator);
  }

  rapidjson::StringBuffer buffer;
  rapidjson::Writer<rapidjson::StringBuffer> writer(buffer);
  output_document.Accept(writer);

  info.GetReturnValue().Set(Nan::New(buffer.GetString()).ToLocalChecked());
}

NAN_MODULE_INIT(Init) {
  NAN_EXPORT(target, processJsonData);
}

NODE_MODULE(addon, Init)

