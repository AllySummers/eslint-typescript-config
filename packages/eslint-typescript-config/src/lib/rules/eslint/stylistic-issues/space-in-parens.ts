import type { AlwaysNever } from '../../../util';

/**
 * @name space-in-parens
 * @link https://eslint.org/docs/rules/space-in-parens
 * @description enforce consistent spacing inside parentheses
 * @auto-fixable
 */
export type SpaceInParens = [
  option?: AlwaysNever,
  config?: SpaceInParens.Advanced
];

/**
 * @name space-in-parens
 * @link https://eslint.org/docs/rules/space-in-parens
 * @description enforce consistent spacing inside parentheses
 * @auto-fixable
 */
export namespace SpaceInParens {
  export type Exceptions = '{}' | '[]' | '()' | 'empty';

  export interface Advanced {
    exceptions?: Array<Exceptions>;
  }
}
