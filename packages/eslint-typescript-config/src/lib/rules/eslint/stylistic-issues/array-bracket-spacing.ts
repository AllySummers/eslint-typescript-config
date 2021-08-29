import type { AlwaysNever } from '../../../util';

/**
 * @name array-bracket-spacing
 * @link https://eslint.org/docs/rules/array-bracket-spacing
 * @description enforce consistent spacing inside array brackets
 * @auto-fixable
 */
export type ArrayBracketSpacing = ArrayBracketSpacing.Advanced | AlwaysNever;

/**
 * @name array-bracket-spacing
 * @link https://eslint.org/docs/rules/array-bracket-spacing
 * @description enforce consistent spacing inside array brackets
 * @auto-fixable
 */
export namespace ArrayBracketSpacing {
  export interface Advanced {
    singleValue?: boolean;
    objectsInArrays?: boolean;
    arraysInArrays?: boolean;
  }
}