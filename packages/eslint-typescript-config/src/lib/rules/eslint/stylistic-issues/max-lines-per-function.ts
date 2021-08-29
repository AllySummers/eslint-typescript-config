import type { Max, MaxNum } from '../../../util';

/**
 * @name max-lines-per-function
 * @link https://eslint.org/docs/rules/max-lines-per-function
 * @description enforce a maximum number of lines of code in a function
 */
export type MaxLinesPerFunction = MaxNum | MaxLinesPerFunction.Advanced;

/**
 * @name max-lines-per-function
 * @link https://eslint.org/docs/rules/max-lines-per-function
 * @description enforce a maximum number of lines of code in a function
 */
export namespace MaxLinesPerFunction {
  export interface Advanced extends Max {
    skipComments?: boolean;
    skipBlankLines?: boolean;
    IIFEs?: boolean;
  }
}