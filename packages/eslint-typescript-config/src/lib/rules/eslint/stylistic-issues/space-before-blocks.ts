import type { AlwaysNever } from '../../../util';

/**
 * @name space-before-blocks
 * @link https://eslint.org/docs/rules/space-before-blocks
 * @description enforce consistent spacing before blocks
 * @auto-fixable
 */
export type SpaceBeforeBlocks = AlwaysNever | SpaceBeforeBlocks.Advanced;

/**
 * @name space-before-blocks
 * @link https://eslint.org/docs/rules/space-before-blocks
 * @description enforce consistent spacing before blocks
 * @auto-fixable
 */
export namespace SpaceBeforeBlocks {
  export type AlwaysNeverOff = AlwaysNever | 'off';

  export type Advanced = Record<'keywords' | 'functions' | 'classes', AlwaysNeverOff>;
}

