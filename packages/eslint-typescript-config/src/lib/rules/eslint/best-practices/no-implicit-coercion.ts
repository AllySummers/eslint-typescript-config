import type { CoercionOperators } from '../../../util';

/**
 * @name no-implicit-coercion
 * @link https://eslint.org/docs/rules/no-implicit-coercion
 * @description disallow shorthand type conversions
 * @auto-fixable
 */
export interface NoImplicitCoercion {
  /**
   * @default true
   */
  boolean?: boolean;
  /**
   * @default true
   */
  number?: boolean;
  /**
   * @default true
   */
  string?: boolean;
  /**
   * @default false
   */
  disallowTemplateShorthand?: boolean;
  allow?: Array<CoercionOperators>;
}
