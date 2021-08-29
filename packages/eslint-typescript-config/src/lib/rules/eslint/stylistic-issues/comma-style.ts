/**
 * @name comma-style
 * @link https://eslint.org/docs/rules/comma-style
 * @description enforce consistent comma style
 * @auto-fixable
 */
export type CommaStyle = [
  option?: CommaStyle.Simple,
  config?: CommaStyle.Advanced
]

export namespace CommaStyle {
  export type Simple = 'first' | 'last';

  export interface Exceptions {
    [key: string]: boolean;
  }

  export interface Advanced {
    exceptions?: Exceptions;
  }
}