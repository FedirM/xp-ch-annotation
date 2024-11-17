use pinyin::{self, ToPinyin};
use serde::{Deserialize, Serialize};
use wasm_bindgen::prelude::*;
use wasm_bindgen::JsValue;

#[wasm_bindgen]
#[derive(Serialize, Deserialize)]
pub struct HanPin {
    han: String,
    pin: String,
}

#[wasm_bindgen]
impl HanPin {
    #[wasm_bindgen(constructor)]
    pub fn new(han: String, pin: String) -> HanPin {
        HanPin { han, pin }
    }

    #[wasm_bindgen(getter)]
    pub fn han(&self) -> String {
        self.han.clone()
    }

    #[wasm_bindgen(getter)]
    pub fn pin(&self) -> String {
        self.pin.clone()
    }
}

#[wasm_bindgen]
pub fn process_zh(text: &str) -> Vec<JsValue> {
    let mut v = vec![];
    for ch in text.chars() {
        let han = ch.to_string();
        match han
            .as_str()
            .to_pinyin()
            .filter_map(|o| Some(o?.plain()))
            .collect::<Vec<&str>>()
            .get(0)
        {
            Some(pin) => {
                let h: HanPin = HanPin::new(han, pin.to_string());
                v.push(serde_wasm_bindgen::to_value(&h).unwrap());
            }
            None => (),
        }
    }

    return v;
}
