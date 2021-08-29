/**
 * @name no-shadow
 * @link https://eslint.org/docs/rules/no-shadow
 * @description disallow variable declarations from shadowing variables declared in the outer scope
 */
export interface NoShadow {
  /**
   * @default false
   */
  builtinGlobals?: boolean;
  hoist?: NoShadow.HoistOption;
  allow?: Array<string>;
}

/**
 * @name no-shadow
 * @link https://eslint.org/docs/rules/no-shadow
 * @description disallow variable declarations from shadowing variables declared in the outer scope
 */
export namespace NoShadow {
  /**
   * @default 'functions'
   */
  export type HoistOption = 'all' | 'functions' | 'never';
}
