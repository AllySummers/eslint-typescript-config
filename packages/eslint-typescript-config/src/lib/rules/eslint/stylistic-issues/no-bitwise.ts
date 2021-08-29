import type { BitwiseOperators } from '../../../util';

/**
 * @name no-bitwise
 * @link https://eslint.org/docs/rules/no-bitwise
 * @description disallow bitwise operators
 */
export interface NoBitwise {
  allow?: Array<BitwiseOperators>
  /**
   * @default false
   */
  int32Hint?: boolean;
}
