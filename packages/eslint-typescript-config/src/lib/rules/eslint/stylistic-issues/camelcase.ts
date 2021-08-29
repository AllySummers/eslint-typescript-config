import type { AlwaysNever } from '../../../util';

/**
 * @name camelcase
 * @link https://eslint.org/docs/rules/camelcase
 * @description enforce camelcase naming convention
 */
export interface Camelcase {
  /**
   * @default false
   */
  ignoreDestructuring?: boolean;
  /**
   * @default false
   */
  ignoreImports?: boolean;
  /**
   * @default false
   */
  ignoreGlobals?: boolean;
  properties?: AlwaysNever;
  allow?: Array<string>;
}