import type { AlwaysNever } from '../../../util';

/**
 * @name eqeqeq
 * @link https://eslint.org/docs/rules/eqeqeq
 * @description require the use of `===` and `!==`
 * @auto-fixable
 */
export type Eqeqeq = Eqeqeq.Simple | Eqeqeq.Always;

export namespace Eqeqeq {
  export interface AlwaysOptions {
    null?: AlwaysNever | 'ignore';
  }

  export type Always = [
    option: 'always',
    config?: AlwaysOptions
  ]

  export type Simple = 'smart' | 'allow-null';
}