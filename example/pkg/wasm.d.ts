declare namespace wasm_bindgen {
	/* tslint:disable */
	/* eslint-disable */
	/**
	 * @param {string} text
	 * @returns {any[]}
	 */
	export function process_zh(text: string): any[];
	export class HanPin {
	  free(): void;
	  /**
	   * @param {string} han
	   * @param {string} pin
	   */
	  constructor(han: string, pin: string);
	  readonly han: string;
	  readonly pin: string;
	}
	
}

declare type InitInput = RequestInfo | URL | Response | BufferSource | WebAssembly.Module;

declare interface InitOutput {
  readonly memory: WebAssembly.Memory;
  readonly __wbg_hanpin_free: (a: number, b: number) => void;
  readonly hanpin_new: (a: number, b: number, c: number, d: number) => number;
  readonly hanpin_han: (a: number, b: number) => void;
  readonly hanpin_pin: (a: number, b: number) => void;
  readonly process_zh: (a: number, b: number, c: number) => void;
  readonly __wbindgen_malloc: (a: number, b: number) => number;
  readonly __wbindgen_realloc: (a: number, b: number, c: number, d: number) => number;
  readonly __wbindgen_add_to_stack_pointer: (a: number) => number;
  readonly __wbindgen_free: (a: number, b: number, c: number) => void;
}

/**
* If `module_or_path` is {RequestInfo} or {URL}, makes a request and
* for everything else, calls `WebAssembly.instantiate` directly.
*
* @param {{ module_or_path: InitInput | Promise<InitInput> }} module_or_path - Passing `InitInput` directly is deprecated.
*
* @returns {Promise<InitOutput>}
*/
declare function wasm_bindgen (module_or_path?: { module_or_path: InitInput | Promise<InitInput> } | InitInput | Promise<InitInput>): Promise<InitOutput>;
