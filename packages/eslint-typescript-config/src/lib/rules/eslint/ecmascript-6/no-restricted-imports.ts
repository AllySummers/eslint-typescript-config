/**
 * @name no-restricted-imports
 * @link https://eslint.org/docs/rules/no-restricted-imports
 * @description disallow specified modules when loaded by 
 */
export type NoRestrictedImports = Array<string | NoRestrictedImports.Advanced>;

/**
 * @name no-restricted-imports
 * @link https://eslint.org/docs/rules/no-restricted-imports
 * @description disallow specified modules when loaded by 
 */
export namespace NoRestrictedImports {
  export interface Advanced {
    name: string;
    message?: string;
    importNames?: Array<string>;
  }
}
