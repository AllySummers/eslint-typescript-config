import type { AlwaysNever } from '../../../util';

/**
 * @name yoda
 * @link https://eslint.org/docs/rules/yoda
 * @description require or disallow "Yoda" conditions
 * @auto-fixable
 */
export type Yoda = [
  option?: AlwaysNever,
  config?: Yoda.Advanced
];

/**
 * @name yoda
 * @link https://eslint.org/docs/rules/yoda
 * @description require or disallow "Yoda" conditions
 * @auto-fixable
 */
export namespace Yoda {
  export interface Advanced {
    /**
     * @default false
     */
    exceptRange?: boolean;
    /**
     * @default false
     */
    onlyEquality?: boolean;
  }
}
