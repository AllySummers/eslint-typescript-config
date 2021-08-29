/**
 * @name no-unused-expressions
 * @link https://eslint.org/docs/rules/no-unused-expressions
 * @description disallow unused expressions
 */
export interface NoUnusedExpressions {
  /**
   * @default false
   */
  allowShortCircuit?: boolean;
  /**
   * @default false
   */
  allowTernary?: boolean;
  /**
   * @default false
   */
  allowTaggedTemplates?: boolean;
  /**
   * @default false
   */
  enforceForJSX?: boolean;
}
