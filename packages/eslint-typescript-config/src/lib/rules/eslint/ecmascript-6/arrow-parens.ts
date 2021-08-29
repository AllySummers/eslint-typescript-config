/**
 * @name arrow-parens
 * @link https://eslint.org/docs/rules/arrow-parens
 * @description require parentheses around arrow function arguments
 * @auto-fixable
 */
export type ArrowParens = ArrowParens.Simple | ArrowParens.AsNeeded;

export namespace ArrowParens {
  export type Simple = [
    option?: 'always'
  ];

  export type AsNeeded = [
    option: 'as-needed',
    settings?: AsNeededOptions
  ];

  export interface AsNeededOptions {
    /**
     * @default false
     */
    requireForBlockBody?: boolean;
  }
}