/**
 * @name no-console
 * @link https://eslint.org/docs/rules/no-console
 * @description disallow the use of 
 */
export interface NoConsole {
  allow?: [NoConsole.ConsoleStr, ...Array<NoConsole.ConsoleStr>];
}

export namespace NoConsole {
  export type ConsoleKeys = keyof typeof console;
  export type ConsoleStr = ConsoleKeys | string;
}