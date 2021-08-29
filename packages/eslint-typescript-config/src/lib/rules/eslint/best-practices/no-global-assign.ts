/**
 * @name no-global-assign
 * @link https://eslint.org/docs/rules/no-global-assign
 * @description disallow assignments to native objects or read-only global variables
 * @recommended
 */
export interface NoGlobalAssign {
  exceptions?: Array<string>;
}
