# XP-PINYIN (js worker)

This project is aimed to help annotate chinese text with pinyin. The goal is to do that on client's side without utilizing any sever resources.

## Prerequisites

- Rust (1.30.0 or later)
- [WASM-Pack](https://github.com/rustwasm/wasm-pack)
- http-server (optionally to run example)

## Building

First you need to build WASM project:

```
> cd ./wasm
> wasm-pack build --target no-modules --out-dir ../example/pkg
```

Now from `pkg` you need import `wasm.js` file to your worker. Then call the only function `process_zh(args: string)`, in response you will get an `Array<{ han: string, pin: string }>`.

```javascript
importScripts("./pkg/xp-ch-pinyin-worker.js");

onmessage = function (event) {
  // Initialize wasm_bindgen (load the WASM module)
  wasm_bindgen("./pkg/xp-ch-pinyin-worker_bg.wasm")
    .then(() => {
      const data = event.data;

      const result = wasm_bindgen.process_zh(data);
      postMessage(result);
    })
    .catch((err) => {
      console.error("Failed to initialize wasm_bindgen:", err);
    });
};
```

## Run example

1. Do the first step from <b>Building</b> block.
2. Run:

```node-js
> npx http-server ./example
```
