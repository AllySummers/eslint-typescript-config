/**
 * @name prefer-destructuring
 * @link https://eslint.org/docs/rules/prefer-destructuring
 * @description require destructuring from arrays and/or objects
 * @auto-fixable
 */
export type PreferDestructuring = [
  config?: PreferDestructuring.Options | PreferDestructuring.Advanced,
  overrides?: PreferDestructuring.Overrides
];

/**
 * @name prefer-destructuring
 * @link https://eslint.org/docs/rules/prefer-destructuring
 * @description require destructuring from arrays and/or objects
 * @auto-fixable
 */
export namespace PreferDestructuring {
  export interface Options {
    array?: boolean;
    object?: boolean;
  }

  export interface Advanced {
    VariableDeclarator?: Options;
    AssignmentExpression?: Options;
  }

  export interface Overrides {
    enforceForRenamedProperties?: boolean;
  }
}