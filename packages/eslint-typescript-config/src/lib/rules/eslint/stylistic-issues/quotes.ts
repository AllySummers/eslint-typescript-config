/**
 * @name quotes
 * @link https://eslint.org/docs/rules/quotes
 * @description enforce the consistent use of either backticks, double, or single quotes
 * @auto-fixable
 */
export type Quotes = [
  option?: Quotes.Simple,
  config?: Quotes.AvoidEscape
];

/**
 * @name quotes
 * @link https://eslint.org/docs/rules/quotes
 * @description enforce the consistent use of either backticks, double, or single quotes
 * @auto-fixable
 */
export namespace Quotes {
  export type Simple = 'single' | 'double' | 'backtick';

  export interface AvoidEscapeOptions {
    avoidEscape?: boolean;
    allowTemplateLiterals?: boolean;
  }

  export type AvoidEscape = 'avoid-escape' | AvoidEscapeOptions;
}
