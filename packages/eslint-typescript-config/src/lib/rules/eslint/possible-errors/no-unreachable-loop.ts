import type { LoopTypes } from '../../../util';

/**
 * @name no-unreachable-loop
 * @link https://eslint.org/docs/rules/no-unreachable-loop
 * @description disallow loops with a body that allows only one iteration
 */
export interface NoUnreachableLoop {
  ignore?: Array<LoopTypes>;
}
