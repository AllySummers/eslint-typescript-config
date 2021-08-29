/**
 * @name func-call-spacing
 * @link https://eslint.org/docs/rules/func-call-spacing
 * @description require or disallow spacing between function identifiers and their invocations
 * @auto-fixable
 */
export type FuncCallSpacing = 'never' | FuncCallSpacing.Always;

/**
 * @name func-call-spacing
 * @link https://eslint.org/docs/rules/func-call-spacing
 * @description require or disallow spacing between function identifiers and their invocations
 * @auto-fixable
 */
export namespace FuncCallSpacing {
  export interface AlwaysOptions {
    allowNewlines?: boolean;
  }

  export type Always = [
    option: 'always',
    config?: AlwaysOptions
  ]
}