import type { AlwaysNever } from '../../../util';

/**
 * @name one-var
 * @link https://eslint.org/docs/rules/one-var
 * @description enforce variables to be declared either together or separately in functions
 * @auto-fixable
 */
export type OneVar = OneVar.AlwaysNeverConsecutive | OneVar.OptionsA | OneVar.OptionsB;

/**
 * @name one-var
 * @link https://eslint.org/docs/rules/one-var
 * @description enforce variables to be declared either together or separately in functions
 * @auto-fixable
 */
export namespace OneVar {
  export type AlwaysNeverConsecutive = AlwaysNever | 'consecutive';

  export interface OptionsA {
    separateRequires?: boolean;
    var?: AlwaysNeverConsecutive;
    let?: AlwaysNeverConsecutive;
    const?: AlwaysNeverConsecutive;
  }

  export interface OptionsB {
    initialized?: AlwaysNeverConsecutive;
    uninitialized?: AlwaysNeverConsecutive;
  }
}
