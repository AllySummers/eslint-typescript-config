import type { AlwaysNever } from '../../../util';

/**
 * @name spaced-comment
 * @link https://eslint.org/docs/rules/spaced-comment
 * @description enforce consistent spacing after the  or  in a comment
 * @auto-fixable
 */
export type SpacedComment = AlwaysNever | SpacedComment.Advanced;

/**
 * @name spaced-comment
 * @link https://eslint.org/docs/rules/spaced-comment
 * @description enforce consistent spacing after the  or  in a comment
 * @auto-fixable
 */
export namespace SpacedComment {
  export interface ExceptionsMarkers {
    exceptions?: Array<string>;
    markers?: Array<string>;
  }

  export interface ExceptionsMarkersBalanced extends ExceptionsMarkers {
    /**
     * @default false
     */
    balanced?: boolean;
  }

  export interface Advanced extends ExceptionsMarkers {
    line?: ExceptionsMarkers;
    block?: ExceptionsMarkersBalanced;
  }
}
