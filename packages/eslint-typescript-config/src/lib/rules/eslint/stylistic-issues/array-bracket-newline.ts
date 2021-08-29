import type { AlwaysNever } from '../../../util';

/**
 * @name array-bracket-newline
 * @link https://eslint.org/docs/rules/array-bracket-newline
 * @description enforce linebreaks after opening and before closing array brackets
 * @auto-fixable
 */
export type ArrayBracketNewline = ArrayBracketNewline.Advanced | ArrayBracketNewline.Simple;

/**
 * @name array-bracket-newline
 * @link https://eslint.org/docs/rules/array-bracket-newline
 * @description enforce linebreaks after opening and before closing array brackets
 * @auto-fixable
 */
export namespace ArrayBracketNewline {
  export type Simple = AlwaysNever | 'consistent';

  export interface Advanced {
    multiline?: boolean;
    /**
     * @min 0
     */
    minItems?: number;
  }
}