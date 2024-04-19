cmd_Release/obj.target/addon/market_data.o := c++ -o Release/obj.target/addon/market_data.o ../market_data.cpp '-DNODE_GYP_MODULE_NAME=addon' '-DUSING_UV_SHARED=1' '-DUSING_V8_SHARED=1' '-DV8_DEPRECATION_WARNINGS=1' '-D_GLIBCXX_USE_CXX11_ABI=1' '-D_DARWIN_USE_64_BIT_INODE=1' '-D_LARGEFILE_SOURCE' '-D_FILE_OFFSET_BITS=64' '-DBUILDING_NODE_EXTENSION' -I/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node -I/Users/kyunuya/Library/Caches/node-gyp/21.7.3/src -I/Users/kyunuya/Library/Caches/node-gyp/21.7.3/deps/openssl/config -I/Users/kyunuya/Library/Caches/node-gyp/21.7.3/deps/openssl/openssl/include -I/Users/kyunuya/Library/Caches/node-gyp/21.7.3/deps/uv/include -I/Users/kyunuya/Library/Caches/node-gyp/21.7.3/deps/zlib -I/Users/kyunuya/Library/Caches/node-gyp/21.7.3/deps/v8/include -I../../../node_modules/nan  -O3 -gdwarf-2 -flto -mmacosx-version-min=11.0 -arch arm64 -Wall -Wendif-labels -W -Wno-unused-parameter -std=gnu++17 -stdlib=libc++ -fno-rtti -fno-exceptions -fno-strict-aliasing -MMD -MF ./Release/.deps/Release/obj.target/addon/market_data.o.d.raw   -c
Release/obj.target/addon/market_data.o: ../market_data.cpp \
  ../market_data.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/cppgc/common.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8config.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-array-buffer.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-local-handle.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-handle-base.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-internal.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-object.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-maybe.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-persistent-handle.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-weak-callback-info.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-primitive.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-data.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-value.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-traced-handle.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-container.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-context.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-snapshot.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-date.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-debug.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-script.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-callbacks.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-promise.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-message.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-exception.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-extension.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-external.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-function.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-function-callback.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-template.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-memory-span.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-initialization.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-isolate.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-embedder-heap.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-microtask.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-statistics.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-unwinder.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-embedder-state-scope.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-platform.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-source-location.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-json.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-locker.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-microtask-queue.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-primitive-object.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-proxy.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-regexp.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-typed-array.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-value-serializer.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-version.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-wasm.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_version.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_api.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/js_native_api.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/js_native_api_types.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_api_types.h \
  ../../../node_modules/nan/nan.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/errno.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/version.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/unix.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/threadpool.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/darwin.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_buffer.h \
  /Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_object_wrap.h \
  ../../../node_modules/nan/nan_callbacks.h \
  ../../../node_modules/nan/nan_callbacks_12_inl.h \
  ../../../node_modules/nan/nan_maybe_43_inl.h \
  ../../../node_modules/nan/nan_converters.h \
  ../../../node_modules/nan/nan_converters_43_inl.h \
  ../../../node_modules/nan/nan_new.h \
  ../../../node_modules/nan/nan_implementation_12_inl.h \
  ../../../node_modules/nan/nan_persistent_12_inl.h \
  ../../../node_modules/nan/nan_weak.h \
  ../../../node_modules/nan/nan_object_wrap.h \
  ../../../node_modules/nan/nan_private.h \
  ../../../node_modules/nan/nan_typedarray_contents.h \
  ../../../node_modules/nan/nan_json.h \
  ../../../node_modules/nan/nan_scriptorigin.h \
  /usr/local/include/rapidjson/document.h \
  /usr/local/include/rapidjson/reader.h \
  /usr/local/include/rapidjson/allocators.h \
  /usr/local/include/rapidjson/rapidjson.h \
  /usr/local/include/rapidjson/internal/meta.h \
  /usr/local/include/rapidjson/internal/../rapidjson.h \
  /usr/local/include/rapidjson/stream.h \
  /usr/local/include/rapidjson/encodings.h \
  /usr/local/include/rapidjson/encodedstream.h \
  /usr/local/include/rapidjson/memorystream.h \
  /usr/local/include/rapidjson/internal/clzll.h \
  /usr/local/include/rapidjson/internal/stack.h \
  /usr/local/include/rapidjson/internal/../allocators.h \
  /usr/local/include/rapidjson/internal/swap.h \
  /usr/local/include/rapidjson/internal/strtod.h \
  /usr/local/include/rapidjson/internal/ieee754.h \
  /usr/local/include/rapidjson/internal/biginteger.h \
  /usr/local/include/rapidjson/internal/diyfp.h \
  /usr/local/include/rapidjson/internal/pow10.h \
  /usr/local/include/rapidjson/error/error.h \
  /usr/local/include/rapidjson/error/../rapidjson.h \
  /usr/local/include/rapidjson/internal/strfunc.h \
  /usr/local/include/rapidjson/internal/../stream.h \
  /usr/local/include/rapidjson/stringbuffer.h \
  /usr/local/include/rapidjson/writer.h \
  /usr/local/include/rapidjson/internal/dtoa.h \
  /usr/local/include/rapidjson/internal/itoa.h
../market_data.cpp:
../market_data.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/cppgc/common.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8config.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-array-buffer.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-local-handle.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-handle-base.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-internal.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-object.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-maybe.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-persistent-handle.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-weak-callback-info.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-primitive.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-data.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-value.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-traced-handle.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-container.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-context.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-snapshot.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-date.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-debug.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-script.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-callbacks.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-promise.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-message.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-exception.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-extension.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-external.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-function.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-function-callback.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-template.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-memory-span.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-initialization.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-isolate.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-embedder-heap.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-microtask.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-statistics.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-unwinder.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-embedder-state-scope.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-platform.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-source-location.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-json.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-locker.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-microtask-queue.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-primitive-object.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-proxy.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-regexp.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-typed-array.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-value-serializer.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-version.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/v8-wasm.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_version.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_api.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/js_native_api.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/js_native_api_types.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_api_types.h:
../../../node_modules/nan/nan.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/errno.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/version.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/unix.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/threadpool.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/uv/darwin.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_buffer.h:
/Users/kyunuya/Library/Caches/node-gyp/21.7.3/include/node/node_object_wrap.h:
../../../node_modules/nan/nan_callbacks.h:
../../../node_modules/nan/nan_callbacks_12_inl.h:
../../../node_modules/nan/nan_maybe_43_inl.h:
../../../node_modules/nan/nan_converters.h:
../../../node_modules/nan/nan_converters_43_inl.h:
../../../node_modules/nan/nan_new.h:
../../../node_modules/nan/nan_implementation_12_inl.h:
../../../node_modules/nan/nan_persistent_12_inl.h:
../../../node_modules/nan/nan_weak.h:
../../../node_modules/nan/nan_object_wrap.h:
../../../node_modules/nan/nan_private.h:
../../../node_modules/nan/nan_typedarray_contents.h:
../../../node_modules/nan/nan_json.h:
../../../node_modules/nan/nan_scriptorigin.h:
/usr/local/include/rapidjson/document.h:
/usr/local/include/rapidjson/reader.h:
/usr/local/include/rapidjson/allocators.h:
/usr/local/include/rapidjson/rapidjson.h:
/usr/local/include/rapidjson/internal/meta.h:
/usr/local/include/rapidjson/internal/../rapidjson.h:
/usr/local/include/rapidjson/stream.h:
/usr/local/include/rapidjson/encodings.h:
/usr/local/include/rapidjson/encodedstream.h:
/usr/local/include/rapidjson/memorystream.h:
/usr/local/include/rapidjson/internal/clzll.h:
/usr/local/include/rapidjson/internal/stack.h:
/usr/local/include/rapidjson/internal/../allocators.h:
/usr/local/include/rapidjson/internal/swap.h:
/usr/local/include/rapidjson/internal/strtod.h:
/usr/local/include/rapidjson/internal/ieee754.h:
/usr/local/include/rapidjson/internal/biginteger.h:
/usr/local/include/rapidjson/internal/diyfp.h:
/usr/local/include/rapidjson/internal/pow10.h:
/usr/local/include/rapidjson/error/error.h:
/usr/local/include/rapidjson/error/../rapidjson.h:
/usr/local/include/rapidjson/internal/strfunc.h:
/usr/local/include/rapidjson/internal/../stream.h:
/usr/local/include/rapidjson/stringbuffer.h:
/usr/local/include/rapidjson/writer.h:
/usr/local/include/rapidjson/internal/dtoa.h:
/usr/local/include/rapidjson/internal/itoa.h:
