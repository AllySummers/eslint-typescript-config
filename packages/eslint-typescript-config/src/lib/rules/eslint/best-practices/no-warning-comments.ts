/**
 * @name no-warning-comments
 * @link https://eslint.org/docs/rules/no-warning-comments
 * @description disallow specified warning terms in comments
 */
export interface NoWarningComments {
  terms?: Array<string>;
  location?: NoWarningComments;
}

/**
 * @name no-warning-comments
 * @link https://eslint.org/docs/rules/no-warning-comments
 * @description disallow specified warning terms in comments
 */
export namespace NoWarningComments {
  export type Location = 'start' | 'anywhere';
}
