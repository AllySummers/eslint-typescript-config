/**
 * @name space-unary-ops
 * @link https://eslint.org/docs/rules/space-unary-ops
 * @description enforce consistent spacing before or after unary operators
 * @auto-fixable
 */
export interface SpaceUnaryOps {
  /**
   * @default true
   */
  words?: boolean;
  /**
   * @default false
   */
  nonwords?: boolean;
  overrides?: Record<string, boolean>;
}
