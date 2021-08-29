/**
 * @name newline-per-chained-call
 * @link https://eslint.org/docs/rules/newline-per-chained-call
 * @description require a newline after each call in a method chain
 * @auto-fixable
 */
export interface NewlinePerChainedCall {
  /**
   * @min 1
   * @max 10
   * @default 2
   */
  ignoreChainWithDepth?: number;
}
