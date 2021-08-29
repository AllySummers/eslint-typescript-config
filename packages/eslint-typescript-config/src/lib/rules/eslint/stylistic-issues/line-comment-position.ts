/**
 * @name line-comment-position
 * @link https://eslint.org/docs/rules/line-comment-position
 * @description enforce position of line comments
 */
export type LineCommentPosition = LineCommentPosition.Simple | LineCommentPosition.Advanced;

/**
 * @name line-comment-position
 * @link https://eslint.org/docs/rules/line-comment-position
 * @description enforce position of line comments
 */
 export namespace LineCommentPosition {
  export type Simple = 'above' | 'beside';

  export interface Advanced {
    position?: Simple;
    ignorePattern?: string;
    applyDefaultPatterns?: boolean;
    applyDefaultIgnorePatterns?: boolean;
  }
}

