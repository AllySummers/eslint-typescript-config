import type { Max, MaxNum } from '../../../util';

/**
 * @name max-lines
 * @link https://eslint.org/docs/rules/max-lines
 * @description enforce a maximum number of lines per file
 */
export type MaxLines = MaxNum | MaxLines.Advanced;

/**
 * @name max-lines
 * @link https://eslint.org/docs/rules/max-lines
 * @description enforce a maximum number of lines per file
 */
export namespace MaxLines {
  export interface Advanced extends Max {
    skipComments?: boolean;
    skipBlankLines?: boolean;
  } 
}