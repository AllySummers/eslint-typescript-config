/**
 * @name yield-star-spacing
 * @link https://eslint.org/docs/rules/yield-star-spacing
 * @description require or disallow spacing around the  in  expressions
 * @auto-fixable
 */
export type YieldStarSpacing = YieldStarSpacing.Position | YieldStarSpacing.Advanced;

/**
 * @name yield-star-spacing
 * @link https://eslint.org/docs/rules/yield-star-spacing
 * @description require or disallow spacing around the  in  expressions
 * @auto-fixable
 */
export namespace YieldStarSpacing {
  export type Position = 'before' | 'after' | 'both' | 'neither';

  export interface Advanced {
    before?: boolean;
    after?: boolean;
  }
}
