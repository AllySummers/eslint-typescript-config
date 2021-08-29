import type { AlwaysNever } from '../../../util';

/**
 * @name lines-between-class-members
 * @link https://eslint.org/docs/rules/lines-between-class-members
 * @description require or disallow an empty line between class members
 * @auto-fixable
 */
export type LinesBetweenClassMembers = [
  option?: AlwaysNever,
  config?: LinesBetweenClassMembers.Advanced
];

/**
 * @name lines-between-class-members
 * @link https://eslint.org/docs/rules/lines-between-class-members
 * @description require or disallow an empty line between class members
 * @auto-fixable
 */
export namespace LinesBetweenClassMembers {
  export interface Advanced {
    /**
     * @default false
     */
    exceptAfterSingleLine?: boolean;
  }
}