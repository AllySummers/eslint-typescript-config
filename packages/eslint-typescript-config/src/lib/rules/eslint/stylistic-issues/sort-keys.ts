/**
 * @name sort-keys
 * @link https://eslint.org/docs/rules/sort-keys
 * @description require object keys to be sorted
 */
export type SortKeys = [
  option?: SortKeys.SortOrder,
  config?: SortKeys.Advanced
];

/**
 * @name sort-keys
 * @link https://eslint.org/docs/rules/sort-keys
 * @description require object keys to be sorted
 */
export namespace SortKeys {
  export type SortOrder = 'asc' | 'desc';

  export interface Advanced {
    /**
     * @default true
     */
    caseSensitive?: boolean;
    /**
     * @default false
     */
    natural?: boolean;
    /**
     * @min 2
     * @default 2
     */
    minKeys?: number;
  }
}

