import type { AlwaysNever } from '../../../util';

/**
 * @name func-names
 * @link https://eslint.org/docs/rules/func-names
 * @description require or disallow named  expressions
 */
export type FuncNames = [
  option?: FuncNames.Simple,
  config?: FuncNames.Advanced
]

/**
 * @name func-names
 * @link https://eslint.org/docs/rules/func-names
 * @description require or disallow named  expressions
 */
export namespace FuncNames {
  export type Simple = AlwaysNever | 'as-needed';

  export interface Advanced {
    generators?: Simple;
  }
}