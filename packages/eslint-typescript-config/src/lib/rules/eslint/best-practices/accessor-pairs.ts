/**
 * @name accessor-pairs
 * @link https://eslint.org/docs/rules/accessor-pairs
 * @description enforce getter and setter pairs in objects and classes
 */
export interface AccessorPairs {
  /**
   * @default false
   */
  getWithoutSet?: boolean;
  /**
   * @default true
   */
  setWithoutGet?: boolean;
  /**
   * @default true
   */
  enforceForClassMembers?: boolean
}
