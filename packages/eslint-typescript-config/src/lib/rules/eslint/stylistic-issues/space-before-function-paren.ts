import type { AlwaysNever } from '../../../util';

/**
 * @name space-before-function-paren
 * @link https://eslint.org/docs/rules/space-before-function-paren
 * @description enforce consistent spacing before  definition opening parenthesis
 * @auto-fixable
 */
export type SpaceBeforeFunctionParen = AlwaysNever | SpaceBeforeFunctionParen.Advanced;

/**
 * @name space-before-function-paren
 * @link https://eslint.org/docs/rules/space-before-function-paren
 * @description enforce consistent spacing before  definition opening parenthesis
 * @auto-fixable
 */
export namespace SpaceBeforeFunctionParen {
  export type AlwaysNeverIgnore = AlwaysNever | 'ignore';

  export type Advanced = Record<'anonymous' | 'named' | 'asyncArrow', AlwaysNeverIgnore>;
}
