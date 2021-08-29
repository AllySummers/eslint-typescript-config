/**
 * @name prefer-const
 * @link https://eslint.org/docs/rules/prefer-const
 * @description require  declarations for variables that are never reassigned after declared
 * @auto-fixable
 */
export interface PreferConst {
  destructuring?: PreferConst.DestructuringOption;
  /**
   * @default false
   */
  ignoreReadBeforeAssign?: boolean;
}

/**
 * @name prefer-const
 * @link https://eslint.org/docs/rules/prefer-const
 * @description require  declarations for variables that are never reassigned after declared
 * @auto-fixable
 */
export namespace PreferConst {
  /**
   * @default 'all'
   */
  export type DestructuringOption = 'any' | 'all';
}
