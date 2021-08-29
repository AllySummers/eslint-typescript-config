/**
 * @name no-unsafe-negation
 * @link https://eslint.org/docs/rules/no-unsafe-negation
 * @description disallow negating the left operand of relational operators
 * @recommended
 * @has-suggestions
 */
export interface NoUnsafeNegation {
  /**
   * @default false
   */
  enforceForOrderingRelations?: boolean;
}
