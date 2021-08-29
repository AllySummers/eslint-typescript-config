/**
 * @name max-len
 * @link https://eslint.org/docs/rules/max-len
 * @description enforce a maximum line length
 */
export type MaxLen = [
  optA?: MaxLen.Simple | MaxLen.Advanced,
  optB?: MaxLen.Simple | MaxLen.Advanced,
  optC?: MaxLen.Advanced
];

/**
 * @name max-len
 * @link https://eslint.org/docs/rules/max-len
 * @description enforce a maximum line length
 */
export namespace MaxLen {
  /**
   * @min 0
   */
  export type Simple = number;

  export interface Advanced {
    /**
     * @min 0
     */
    code?: number;
    /**
     * @min 0
     */
    comments?: number;
    /**
     * @min 0
     */
    tabWidth?: number;
    ignorePattern?: string;
    ignoreComments?: boolean;
    ignoreStrings?: boolean;
    ignoreUrls?: boolean;
    ignoreTemplateLiterals?: boolean;
    ignoreTrailingComments?: boolean;
    ignoreRegExpLiterals?: boolean;
  }
}
