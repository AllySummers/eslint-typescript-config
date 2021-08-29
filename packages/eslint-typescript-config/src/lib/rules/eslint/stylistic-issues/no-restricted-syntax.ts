/**
 * @name no-restricted-syntax
 * @link https://eslint.org/docs/rules/no-restricted-syntax
 * @description disallow specified syntax
 */
export type NoRestrictedSyntax = Array<string | NoRestrictedSyntax.Advanced>;

/**
 * @name no-restricted-syntax
 * @link https://eslint.org/docs/rules/no-restricted-syntax
 * @description disallow specified syntax
 */
export namespace NoRestrictedSyntax {
  export interface Advanced {
    selector: string;
    message?: string;
  }
}
