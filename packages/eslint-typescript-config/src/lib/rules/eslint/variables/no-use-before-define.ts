/**
 * @name no-use-before-define
 * @link https://eslint.org/docs/rules/no-use-before-define
 * @description disallow the use of variables before they are defined
 */
export type NoUseBeforeDefine = NoUseBeforeDefine.NoFunc | NoUseBeforeDefine.Advanced;

/**
 * @name no-use-before-define
 * @link https://eslint.org/docs/rules/no-use-before-define
 * @description disallow the use of variables before they are defined
 */
export namespace NoUseBeforeDefine {
  export type NoFunc = 'nofunc';

  export interface Advanced {
    functions?: boolean;
    classes?: boolean;
    variables?: boolean;
  }
}