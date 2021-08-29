import type { AlwaysNever } from '../../../util';

/**
 * @name object-curly-newline
 * @link https://eslint.org/docs/rules/object-curly-newline
 * @description enforce consistent line breaks after opening and before closing braces
 * @auto-fixable
 */
export type ObjectCurlyNewline = AlwaysNever | ObjectCurlyNewline.Advanced;

/**
 * @name object-curly-newline
 * @link https://eslint.org/docs/rules/object-curly-newline
 * @description enforce consistent line breaks after opening and before closing braces
 * @auto-fixable
 */
export namespace ObjectCurlyNewline {
  /**
   * At least one property must be specified
   */
  export interface Advanced {
    multiline?: boolean;
    /**
     * @min 0
     */
    minProperties?: number;
    consistent?: boolean;
  }
}