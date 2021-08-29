/**
 * @name no-unused-vars
 * @link https://eslint.org/docs/rules/no-unused-vars
 * @description disallow unused variables
 * @recommended
 */
export type NoUnusedVars = NoUnusedVars.Simple | NoUnusedVars.Advanced;

/**
 * @name no-unused-vars
 * @link https://eslint.org/docs/rules/no-unused-vars
 * @description disallow unused variables
 * @recommended
 */
export namespace NoUnusedVars {
  export type Simple = 'all' | 'local';

  export type Args = 'all' | 'after-used' | 'none';

  export type CaughtErrors = 'all' | 'none';

  export interface Advanced {
    vars?: Simple;
    varsIgnorePattern?: string;
    args?: Args;
    ignoreRestSiblings?: boolean;
    argsIgnorePattern?: string;
    caughtErrors?: CaughtErrors;
    caughtErrorsIgnorePattern?: string;
  }
}

