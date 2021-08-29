/**
 * @name generator-star-spacing
 * @link https://eslint.org/docs/rules/generator-star-spacing
 * @description enforce consistent spacing around  operators in generator functions
 * @auto-fixable
 */
export type GeneratorStarSpacing = GeneratorStarSpacing.Simple | GeneratorStarSpacing.Advanced;

/**
 * @name generator-star-spacing
 * @link https://eslint.org/docs/rules/generator-star-spacing
 * @description enforce consistent spacing around  operators in generator functions
 * @auto-fixable
 */
export namespace GeneratorStarSpacing {
  export type Simple = 'before' | 'after' | 'both' | 'neither';

  export interface BeforeAfter {
    before?: boolean;
    after?: boolean;
  }

  export interface Advanced extends BeforeAfter {
    named?: BeforeAfter;
    anonymous?: BeforeAfter;
    method?: BeforeAfter;
  }
}