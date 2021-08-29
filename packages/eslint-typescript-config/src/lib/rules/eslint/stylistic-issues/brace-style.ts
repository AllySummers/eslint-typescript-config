/**
 * @name brace-style
 * @link https://eslint.org/docs/rules/brace-style
 * @description enforce consistent brace style for blocks
 * @auto-fixable
 */
export type BraceStyle = [
  option?: BraceStyle.Options,
  settings?: BraceStyle.Advanced
]

export namespace BraceStyle {
  export type Options = '1tbs' | 'stroustrup' | 'allman';

  export interface Advanced {
    /**
     * @default false
     */
    allowSingleLine?: boolean;
  }
}