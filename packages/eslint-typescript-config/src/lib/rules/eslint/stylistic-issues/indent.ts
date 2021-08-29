/**
 * @name indent
 * @link https://eslint.org/docs/rules/indent
 * @description enforce consistent indentation
 * @auto-fixable
 */
export interface Indent {

}

/**
 * @name indent
 * @link https://eslint.org/docs/rules/indent
 * @description enforce consistent indentation
 * @auto-fixable
 */
export namespace Indent {
  export type Simple = 'tab' | number;

  export type FirstOff = 'first' | 'off';

  export type NumberOff = number | 'off';

  export type ElementList = number | FirstOff;

  export type VariableDeclaratorOptions = Record<'var' | 'let' | 'const', ElementList>;

  export interface FunctionDeclarationExpressionOptions {
    parameters?: ElementList;
    /**
     * @min 0
     */
    body?: number;
  }

  export interface CallExpressionOptions {
    arguments?: ElementList;
  }

  export interface Advanced {
    /**
     * @min 0
     * @default 0
     */
    SwitchCase?: number;
    VariableDeclarator?: ElementList | VariableDeclaratorOptions;
    outerIIFEBody?: NumberOff;
    MemberExpression?: NumberOff;
    FunctionDeclaration?: FunctionDeclarationExpressionOptions;
    FunctionExpression?: FunctionDeclarationExpressionOptions;
    CallExpression?: CallExpressionOptions;
    ArrayExpression?: ElementList;
    ObjectExpression?: ElementList;
    ImportDeclaration?: ElementList;
    /**
     * @default false
     */
    flatTernaryExpressions?: boolean;
    /**
     * @default false
     */
    offsetTernaryExpressions?: boolean;
    /**
     * @note Can not be `:exit$`
     */
    ignoredNodes?: Array<string>;
    /**
     * @default false
     */
    ignoreComments?: boolean;
  }
}