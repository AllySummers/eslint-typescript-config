import type { AlwaysNever } from '../../../util';

/**
 * @name padded-blocks
 * @link https://eslint.org/docs/rules/padded-blocks
 * @description require or disallow padding within blocks
 * @auto-fixable
 */
export type PaddedBlocks = [
  option?: AlwaysNever | PaddedBlocks.Overrides,
  config?: PaddedBlocks.Advanced
];

/**
 * @name padded-blocks
 * @link https://eslint.org/docs/rules/padded-blocks
 * @description require or disallow padding within blocks
 * @auto-fixable
 */
export namespace PaddedBlocks {
  /**
   * Must have at least one property
   */
  export type Overrides = Record<'blocks' | 'switches' | 'classes', AlwaysNever>;

  export interface Advanced {
    allowSingleLineBlocks?: boolean;
  }
}