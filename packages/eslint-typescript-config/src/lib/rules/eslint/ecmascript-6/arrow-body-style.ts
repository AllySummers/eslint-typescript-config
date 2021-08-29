import type { AlwaysNever } from '../../../util';

/**
 * @name arrow-body-style
 * @link https://eslint.org/docs/rules/arrow-body-style
 * @description require braces around arrow function bodies
 * @auto-fixable
 */
export type ArrowBodyStyle = AlwaysNever | ArrowBodyStyle.AsNeeded;

export namespace ArrowBodyStyle {
  export interface AsNeededOptions {
    requireReturnForObjectLiteral?: boolean;
  }

  export type AsNeeded = [
    option: 'as-needed',
    settings?: AsNeededOptions
  ]
}