/**
 * @name no-multiple-empty-lines
 * @link https://eslint.org/docs/rules/no-multiple-empty-lines
 * @description disallow multiple empty lines
 * @auto-fixable
 */
export interface NoMultipleEmptyLines {
  /**
   * @min 0
   */
  max: number;
  /**
   * @min 0
   */
  maxEOF?: number;
  /**
   * @min 0
   */
  maxBOF?: number;
}
