import type { AlwaysNever, Max } from '../../../util';

/**
 * @name id-length
 * @link https://eslint.org/docs/rules/id-length
 * @description enforce minimum and maximum identifier lengths
 */
export interface IdLength extends Max {
  /**
   * @default 2
   */
  min?: number;
  exceptions?: Array<string>;
  exceptionPatterns?: Array<string>;
  properties?: AlwaysNever;
}
