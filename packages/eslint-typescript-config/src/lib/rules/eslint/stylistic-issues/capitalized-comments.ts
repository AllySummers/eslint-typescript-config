import type { AlwaysNever } from '../../../util';

/**
 * @name capitalized-comments
 * @link https://eslint.org/docs/rules/capitalized-comments
 * @description enforce or disallow capitalization of the first letter of a comment
 * @auto-fixable
 */
export type CapitalizedComments = [
  option?: AlwaysNever,
  settings?: CapitalizedComments.Options | CapitalizedComments.SpecificOptions
]

/**
 * @name capitalized-comments
 * @link https://eslint.org/docs/rules/capitalized-comments
 * @description enforce or disallow capitalization of the first letter of a comment
 * @auto-fixable
 */
export namespace CapitalizedComments {
  export interface Options {
    ignorePattern?: string;
    ignoreInlineComments?: boolean;
    ignoreConsecutiveComments?: boolean;
  }

  export interface SpecificOptions {
    line?: Options;
    block?: Options;
  }
}