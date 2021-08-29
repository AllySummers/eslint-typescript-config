import type { AlwaysNever } from '../../../util';

/**
 * @name computed-property-spacing
 * @link https://eslint.org/docs/rules/computed-property-spacing
 * @description enforce consistent spacing inside computed property brackets
 * @auto-fixable
 */
export type ComputedPropertySpacing = [
  option?: AlwaysNever,
   config?: ComputedPropertySpacing.Advanced
]

export namespace ComputedPropertySpacing {
  export interface Advanced {
    /**
     * @default true
     */
    enforceForClassMembers?: boolean;
  }
}
