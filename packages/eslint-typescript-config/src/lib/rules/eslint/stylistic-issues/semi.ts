import type { AlwaysNever } from '../../../util';

/**
 * @name semi
 * @link https://eslint.org/docs/rules/semi
 * @description require or disallow semicolons instead of ASI
 * @auto-fixable
 */
export type Semi = AlwaysNever | Semi.Never | Semi.Always;

/**
 * @name semi
 * @link https://eslint.org/docs/rules/semi
 * @description require or disallow semicolons instead of ASI
 * @auto-fixable
 */
export namespace Semi {
  export type BeforeStatementContinuation = AlwaysNever | 'any';

  export interface NeverConfig {
    beforeStatementContinuationChars?: BeforeStatementContinuation;
  }

  export interface AlwaysConfig {
    omitLastInOneLineBlock?: boolean;
  }

  export type Never = [
    option: 'never',
    config?: NeverConfig
  ];

  export type Always = [
    option?: 'always',
    config?: AlwaysConfig
  ];
}
