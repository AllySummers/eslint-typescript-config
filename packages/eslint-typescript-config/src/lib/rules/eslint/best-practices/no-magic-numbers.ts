/**
 * @name no-magic-numbers
 * @link https://eslint.org/docs/rules/no-magic-numbers
 * @description disallow magic numbers
 */
export interface NoMagicNumbers {
  /**
   * @default false
   */
  detectObjects?: boolean;
  /**
   * @default false
   */
  enforceConst?: boolean;
  ignore?: Array<number | string>;
  /**
   * @default false
   */
  ignoreArrayIndexes?: boolean;
  /**
   * @default false
   */
  ignoreDefaultValues?: boolean;
}
