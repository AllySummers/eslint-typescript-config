/**
 * @name prefer-arrow-callback
 * @link https://eslint.org/docs/rules/prefer-arrow-callback
 * @description require using arrow functions for callbacks
 * @auto-fixable
 */
export interface PreferArrowCallback {
  /**
   * @default false
   */
  allowNamedFunctions?: boolean;
  /** 
   * @default true
   */
  allowUnboundThis?: boolean;
}
