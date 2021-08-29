import type { AlwaysNever } from '../../../util';

/**
 * @name function-paren-newline
 * @link https://eslint.org/docs/rules/function-paren-newline
 * @description enforce consistent line breaks inside function parentheses
 * @auto-fixable
 */
export type FunctionParenNewline = [
  option?: FunctionParenNewline.Simple,
  config?: FunctionParenNewline.Advanced
];

/**
 * @name function-paren-newline
 * @link https://eslint.org/docs/rules/function-paren-newline
 * @description enforce consistent line breaks inside function parentheses
 * @auto-fixable
 */
export namespace FunctionParenNewline {
  export type Simple = AlwaysNever | 'consistent' | 'multiline' | 'multiline-arguments';

  export interface Advanced {
    /**
     * @min 0
     */
    minItems?: number;
  }
}