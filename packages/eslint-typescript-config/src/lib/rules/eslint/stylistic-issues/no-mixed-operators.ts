import type { AllOperators } from '../../../util';

/**
 * @name no-mixed-operators
 * @link https://eslint.org/docs/rules/no-mixed-operators
 * @description disallow mixed binary operators
 */
export interface NoMixedOperators {
  groups?: Array<NoMixedOperators.GroupItem>;
  /**
   * @default true
   */
  allowSamePrecedence?: boolean;
}

/**
 * @name no-mixed-operators
 * @link https://eslint.org/docs/rules/no-mixed-operators
 * @description disallow mixed binary operators
 */
export namespace NoMixedOperators {
  export type GroupItem = [AllOperators, AllOperators, ...Array<AllOperators>];
}
