/**
 * @name nonblock-statement-body-position
 * @link https://eslint.org/docs/rules/nonblock-statement-body-position
 * @description enforce the location of single-line statements
 * @auto-fixable
 */
export type NonblockStatementBodyPosition = [
  position?: NonblockStatementBodyPosition.Position,
  config?: NonblockStatementBodyPosition.Advanced
]

/**
 * @name nonblock-statement-body-position
 * @link https://eslint.org/docs/rules/nonblock-statement-body-position
 * @description enforce the location of single-line statements
 * @auto-fixable
 */
export namespace NonblockStatementBodyPosition {
  export type Position = 'beside' | 'below' | 'any';

  export type Overrides = Record<'if' | 'else' | 'while' | 'do' | 'for', Position>;

  export interface Advanced {
    overrides?: Overrides;
  }
}

