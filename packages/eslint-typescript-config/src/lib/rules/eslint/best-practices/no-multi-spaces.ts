/**
 * @name no-multi-spaces
 * @link https://eslint.org/docs/rules/no-multi-spaces
 * @description disallow multiple spaces
 * @auto-fixable
 */
export interface NoMultiSpaces {
  exceptions?: NoMultiSpaces.Exceptions;
  /**
   * @default false
   */
  ignoreEOLComments?: boolean;
}

/**
 * @name no-multi-spaces
 * @link https://eslint.org/docs/rules/no-multi-spaces
 * @description disallow multiple spaces
 * @auto-fixable
 */
export namespace NoMultiSpaces {
  /** 
   * @pattern ^([A-Z][a-z]*)+$
   */
  export type Exceptions = Record<string, boolean>;
}