import type { ExtendedKeywords } from '../../../util';

/**
 * @name keyword-spacing
 * @link https://eslint.org/docs/rules/keyword-spacing
 * @description enforce consistent spacing before and after keywords
 * @auto-fixable
 */
export interface KeywordSpacing extends KeywordSpacing.BeforeAfter {
  overrides?: KeywordSpacing.Overrides;
}

export namespace KeywordSpacing {
  export interface BeforeAfter {
    /**
     * @default true
     */
    before?: boolean;
    /**
     * @default true
     */
    after?: boolean;
  }

  export type Overrides = Record<ExtendedKeywords, BeforeAfter>; 
}