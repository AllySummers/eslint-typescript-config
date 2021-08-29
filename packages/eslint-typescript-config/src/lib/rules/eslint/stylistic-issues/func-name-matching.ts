import type { AlwaysNever } from '../../../util';

/**
 * @name func-name-matching
 * @link https://eslint.org/docs/rules/func-name-matching
 * @description require function names to match the name of the variable or property to which they are assigned
 */
export type FuncNameMatching = AlwaysNever | FuncNameMatching.Advanced; 

/**
 * @name func-name-matching
 * @link https://eslint.org/docs/rules/func-name-matching
 * @description require function names to match the name of the variable or property to which they are assigned
 */
export namespace FuncNameMatching {
  export interface AdvancedOptions {
    considerPropertyDescriptor?: boolean;
    includeCommonJSModuleExports?: boolean;
  }

  export type Advanced = [
    option?: AlwaysNever,
    config?: AdvancedOptions
  ]
}