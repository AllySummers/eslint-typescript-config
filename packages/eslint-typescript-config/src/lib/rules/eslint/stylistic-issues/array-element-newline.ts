import type { AlwaysNever } from '../../../util';

/**
 * @name array-element-newline
 * @link https://eslint.org/docs/rules/array-element-newline
 * @description enforce line breaks after each array element
 * @auto-fixable
 */
export type ArrayElementNewline = AlwaysNever | ArrayElementNewline.Advanced;

/**
 * @name array-element-newline
 * @link https://eslint.org/docs/rules/array-element-newline
 * @description enforce line breaks after each array element
 * @auto-fixable
 */
export namespace ArrayElementNewline {
  export interface Advanced {
    multiline?: boolean;
    /**
     * @min 0
     */
    minItems?: number;
  }
}