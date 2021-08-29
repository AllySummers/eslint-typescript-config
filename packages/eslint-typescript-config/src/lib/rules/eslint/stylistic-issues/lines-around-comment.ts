/**
 * @name lines-around-comment
 * @link https://eslint.org/docs/rules/lines-around-comment
 * @description require empty lines around comments
 * @auto-fixable
 */
export interface LinesAroundComment {
  /**
   * @default true
   */
  beforeBlockComment?: boolean;
  /**
   * @default false
   */
  afterBlockComment?: boolean;
  /**
   * @default false
   */
  beforeLineComment?: boolean;
  /**
   * @default false
   */
  afterLineComment?: boolean;
  /**
   * @default false
   */
  allowBlockStart?: boolean;
  /**
   * @default false
   */
  allowBlockEnd?: boolean;
  allowClassStart?: boolean;
  allowClassEnd?: boolean;
  allowObjectStart?: boolean;
  allowObjectEnd?: boolean;
  allowArrayStart?: boolean;
  allowArrayEnd?: boolean;
  ignorePattern?: string;
  applyDefaultIgnorePatterns?: boolean;
}
