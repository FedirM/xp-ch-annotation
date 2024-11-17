// Import WASM runtime and WASM module
importScripts("./pkg/wasm.js");

onmessage = function (event) {
    // Initialize wasm_bindgen (load the WASM module)
    wasm_bindgen("./pkg/wasm_bg.wasm").then(() => {
        const data = event.data;

        const result = wasm_bindgen.process_zh(data);
        postMessage(result);

    }).catch((err) => {
        console.error("Failed to initialize wasm_bindgen:", err);
    });
};
