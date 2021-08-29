/**
 * @name padding-line-between-statements
 * @link https://eslint.org/docs/rules/padding-line-between-statements
 * @description require or disallow padding lines between statements
 * @auto-fixable
 */
export type PaddingLineBetweenStatements =
  Array<PaddingLineBetweenStatements.Config>;

/**
 * @name padding-line-between-statements
 * @link https://eslint.org/docs/rules/padding-line-between-statements
 * @description require or disallow padding lines between statements
 * @auto-fixable
 */
export namespace PaddingLineBetweenStatements {
  export type PaddingType = 'any' | 'never' | 'always';

  export type VarLetConst = 'var' | 'let' | 'const';

  export type StatementType =
    | '*'
    | 'block-like'
    | 'cjs-export'
    | 'cjs-import'
    | 'directive'
    | 'expression'
    | 'iife'
    | 'multiline-block-like'
    | 'multiline-expression'
    | `multiline-${VarLetConst}`
    | `singleline-${VarLetConst}`
    | 'block'
    | 'empty'
    | 'function'
    | 'break'
    | 'case'
    | 'class'
    | 'const'
    | 'continue'
    | 'debugger'
    | 'default'
    | 'do'
    | 'export'
    | 'for'
    | 'if'
    | 'import'
    | 'let'
    | 'return'
    | 'switch'
    | 'throw'
    | 'try'
    | 'var'
    | 'while'
    | 'with';

  export type StatementTypes = StatementType | [StatementType, ...Array<StatementType>];

  export interface Config {
    blankLine: PaddingType;
    prev: StatementType;
    next: StatementType;
  }
}
