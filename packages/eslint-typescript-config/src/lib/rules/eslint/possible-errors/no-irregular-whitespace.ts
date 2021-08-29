/**
 * @name no-irregular-whitespace
 * @link https://eslint.org/docs/rules/no-irregular-whitespace
 * @description disallow irregular whitespace
 * @recommended
 */
export interface NoIrregularWhitespace {
  /**
   * @default false
   */
  skipComments?: boolean;
  /**
   * @default true
   */
  skipStrings?: boolean;
  /**
   * @default false
   */
  skipTemplates?: boolean;
  /**
   * @default false
   */
  skipRegExps?: boolean;
}
