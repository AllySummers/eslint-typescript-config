/**
 * @name wrap-iife
 * @link https://eslint.org/docs/rules/wrap-iife
 * @description require parentheses around immediate  invocations
 * @auto-fixable
 */
export type WrapIife = [
  option?: WrapIife.Position,
  config?: WrapIife.Advanced
];

/**
 * @name wrap-iife
 * @link https://eslint.org/docs/rules/wrap-iife
 * @description require parentheses around immediate  invocations
 * @auto-fixable
 */
export namespace WrapIife {
  export type Position = 'outside' | 'inside' | 'any';

  export interface Advanced {
    /**
     * @default false
     */
    functionPrototypeMethods?: boolean;
  }
}
