import type { AlwaysNever } from '../../../util';

/**
 * @name eol-last
 * @link https://eslint.org/docs/rules/eol-last
 * @description require or disallow newline at the end of files
 * @auto-fixable
 */
export type EolLast = AlwaysNever | 'unix' | 'windows';