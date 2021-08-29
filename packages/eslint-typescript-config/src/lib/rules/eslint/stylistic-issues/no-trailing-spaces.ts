/**
 * @name no-trailing-spaces
 * @link https://eslint.org/docs/rules/no-trailing-spaces
 * @description disallow trailing whitespace at the end of lines
 * @auto-fixable
 */
export interface NoTrailingSpaces {
  /**
   * @default false
   */
  skipBlankLines?: boolean;
  /**
   * @default false
   */
   ignoreComments?: boolean;
}
