/**
 * @name new-cap
 * @link https://eslint.org/docs/rules/new-cap
 * @description require constructor names to begin with a capital letter
 */
export interface NewCap {
  /**
   * @default true
   */
  newIsCap?: boolean;
  /**
   * @default true
   */
  capIsNew?: boolean;
  newIsCapExceptions?: Array<string>;
  newIsCapExceptionPattern?: string;
  capIsNewExceptions?: Array<string>;
  capIsNewExceptionPattern?: string;
  /**
   * @default true
   */
  properties?: boolean;
}
