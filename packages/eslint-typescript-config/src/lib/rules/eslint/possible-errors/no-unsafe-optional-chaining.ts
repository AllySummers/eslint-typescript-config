/**
 * @name no-unsafe-optional-chaining
 * @link https://eslint.org/docs/rules/no-unsafe-optional-chaining
 * @description disallow use of optional chaining in contexts where the  value is not allowed
 */
export interface NoUnsafeOptionalChaining {
  /**
   * @default false
   */
  disallowArithmeticOperators?: boolean;
}
