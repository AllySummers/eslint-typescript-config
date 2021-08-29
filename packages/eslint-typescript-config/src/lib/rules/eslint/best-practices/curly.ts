/**
 * @name curly
 * @link https://eslint.org/docs/rules/curly
 * @description enforce consistent brace style for all control statements
 * @auto-fixable
 */
export type Curly = 'all' | Curly.Advanced;

/**
 * @name curly
 * @link https://eslint.org/docs/rules/curly
 * @description enforce consistent brace style for all control statements
 * @auto-fixable
 */
export namespace Curly {
  export type Advanced = [
    option: 'multi' | 'multi-line' | 'multi-or-nest',
    consistent?: 'consistent'
  ]
}