/**
 * @name no-extra-parens
 * @link https://eslint.org/docs/rules/no-extra-parens
 * @description disallow unnecessary parentheses
 * @auto-fixable
 */
export type NoExtraParens = 'functions' | NoExtraParens.All;

/**
 * @name no-extra-parens
 * @link https://eslint.org/docs/rules/no-extra-parens
 * @description disallow unnecessary parentheses
 * @auto-fixable
 */
export namespace NoExtraParens {
  export type IgnoreJsx = 'none' | 'all' | 'single-line' | 'multi-line';

  export interface AllOptions {
    conditionalAssign?: boolean;
    nestedBinaryExpressions?: boolean;
    returnAssign?: boolean;
    ignoreJSX?: IgnoreJsx;
    enforceForArrowConditionals?: boolean;
    enforceForSequenceExpressions?: boolean;
    enforceForNewInMemberExpressions?: boolean;
    enforceForFunctionPrototypeMethods?: boolean;
  }

  export type All = [
    option: 'all',
    config?: AllOptions
  ];
}
