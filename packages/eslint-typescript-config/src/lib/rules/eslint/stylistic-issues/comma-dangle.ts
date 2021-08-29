import type { AlwaysNever } from '../../../util';

/**
 * @name comma-dangle
 * @link https://eslint.org/docs/rules/comma-dangle
 * @description require or disallow trailing commas
 * @auto-fixable
 */
export type CommaDangle = CommaDangle.Simple | CommaDangle.Advanced;

/**
 * @name comma-dangle
 * @link https://eslint.org/docs/rules/comma-dangle
 * @description require or disallow trailing commas
 * @auto-fixable
 */
export namespace CommaDangle {
  export type Simple = AlwaysNever | 'always-multiline' | 'never-multiline';

  export type ValueWithIgnore = Simple | 'ignore';

  export type Advanced = Record<'arrays' | 'objects' | 'imports' | 'exports' | 'functions', ValueWithIgnore>
}
