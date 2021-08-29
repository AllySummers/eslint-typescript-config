/**
 * @name init-declarations
 * @link https://eslint.org/docs/rules/init-declarations
 * @description require or disallow initialization in variable declarations
 */
export type InitDeclarations = 'always' | InitDeclarations.Never;

/**
 * @name init-declarations
 * @link https://eslint.org/docs/rules/init-declarations
 * @description require or disallow initialization in variable declarations
 */
export namespace InitDeclarations {
  export interface NeverOptions {
    ignoreForLoopInit?: boolean;
  }

  export type Never = [
    option: 'never',
    config?: NeverOptions
  ]
}