#include<iostream>
#include"market_data.h"

void printId(){
  std::cout << input_document["id"].GetInt() << '\n';
}

rapidjson::Document input_document;

// main function
NAN_METHOD(main_func){

  int e = processJsonData(info);

  if(e == -1){
    return Nan::ThrowError("Invalid JSON data");
  } else if(e == -2){
    return Nan::ThrowError("JSON parsing error");
  }
}

NAN_MODULE_INIT(Init) {
  NAN_EXPORT(target, main_func);
}

NODE_MODULE(addon, Init)
