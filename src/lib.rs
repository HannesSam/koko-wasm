use wasm_bindgen::prelude::*;
use web_sys::console;

#[wasm_bindgen]
pub fn labOneWASM() {
    let mut i = 0;
        while i < 400 {
        let result = 242 * 34;
        console::log_1(&JsValue::from_f64(f64::from(result)));
        i = i + 1;
        }

}
