import type { AllOperators } from '../../../util';

/**
 * @name operator-linebreak
 * @link https://eslint.org/docs/rules/operator-linebreak
 * @description enforce consistent linebreak style for operators
 * @auto-fixable
 */
export type OperatorLinebreak = [
  option?: OperatorLinebreak.PositionNull,
  config?: OperatorLinebreak.Overrides
]

/**
 * @name operator-linebreak
 * @link https://eslint.org/docs/rules/operator-linebreak
 * @description enforce consistent linebreak style for operators
 * @auto-fixable
 */
export namespace OperatorLinebreak {
  export type Position = 'after' | 'before' | 'none';
  
  export type PositionNull = Position | null;

  export type PositionIgnore = Position | 'ignore';

  export type Operators = Record<AllOperators, PositionIgnore>;

  export interface Overrides extends Operators {
    [key: string]: PositionIgnore;
  }
}
