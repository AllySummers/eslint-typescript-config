/**
 * @name array-callback-return
 * @link https://eslint.org/docs/rules/array-callback-return
 * @description enforce  statements in callbacks of array methods
 */
export interface ArrayCallbackReturn {
  /**
   * @default false
   */
  allowImplicit?: boolean;
  /** 
   * @default false
   */
  checkForEach?: boolean;
}
