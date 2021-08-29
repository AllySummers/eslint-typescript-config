/**
 * @name no-restricted-globals
 * @link https://eslint.org/docs/rules/no-restricted-globals
 * @description disallow specified global variables
 */
export type NoRestrictedGlobals = Array<string | NoRestrictedGlobals.Advanced>;

/**
 * @name no-restricted-globals
 * @link https://eslint.org/docs/rules/no-restricted-globals
 * @description disallow specified global variables
 */
export namespace NoRestrictedGlobals {
  export interface Advanced {
    name: string;
    message?: string;
  }
}