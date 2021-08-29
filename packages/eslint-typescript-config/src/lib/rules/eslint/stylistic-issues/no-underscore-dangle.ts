/**
 * @name no-underscore-dangle
 * @link https://eslint.org/docs/rules/no-underscore-dangle
 * @description disallow dangling underscores in identifiers
 */
export interface NoUnderscoreDangle {
  allow?: Array<string>;
  /**
   * @default false
   */
  allowAfterThis?: boolean;
  /**
   * @default false
   */
  allowAfterSuper?: boolean;
  /**
   * @default false
   */
  allowAfterThisConstructor?: boolean;
  /**
   * @default false
   */
  enforceInMethodNames?: boolean;
  /**
   * @default true
   */
  allowFunctionParams?: boolean;
}
