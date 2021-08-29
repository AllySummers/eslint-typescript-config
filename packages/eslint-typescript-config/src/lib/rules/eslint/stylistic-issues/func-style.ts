/**
 * @name func-style
 * @link https://eslint.org/docs/rules/func-style
 * @description enforce the consistent use of either  declarations or expressions
 */
export type FuncStyle = [
  option?: FuncStyle.Simple,
  config?: FuncStyle.Advanced
];

export namespace FuncStyle {
  export type Simple = 'declaration' | 'expression';

  export interface Advanced {
    /**
     * @default false
     */
    allowArrowFunctions?: boolean;
  }
}