/**
 * @name no-useless-rename
 * @link https://eslint.org/docs/rules/no-useless-rename
 * @description disallow renaming import, export, and destructured assignments to the same name
 * @auto-fixable
 */
export interface NoUselessRename {
  /**
   * @default false
   */
  ignoreDestructuring?: boolean;
  /**
   * @default false
   */
  ignoreImport?: boolean;
  /**
   * @default false
   */
  ignoreExport?: boolean;
}
