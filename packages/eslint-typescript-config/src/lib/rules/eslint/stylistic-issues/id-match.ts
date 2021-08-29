/**
 * @name id-match
 * @link https://eslint.org/docs/rules/id-match
 * @description require identifiers to match a specified regular expression
 */
export type IdMatch = [
  /** 
   * Regular Expression
   */
  pattern?: string,
  config?: IdMatch.Advanced
];

/**
 * @name id-match
 * @link https://eslint.org/docs/rules/id-match
 * @description require identifiers to match a specified regular expression
 */
export namespace IdMatch {
  export interface Advanced {
    /**
     * @default false
     */
    properties?: boolean;
    /**
     * @default false
     */
    classFields?: boolean;
    /**
     * @default false
     */
    onlyDeclarations?: boolean;
    /**
     * @default false
     */
    ignoreDestructuring?: boolean;
  }
}