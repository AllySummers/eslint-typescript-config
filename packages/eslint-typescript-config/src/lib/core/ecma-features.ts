/**
 * By default, ESLint supports only ECMAScript 5 syntax. You can override that setting to enable support for ECMAScript 6 as well as JSX by using configuration settings.
 */
export interface EcmaFeatures {
  arrowFunctions?: boolean;
  binaryLiterals?: boolean;
  blockBindings?: boolean;
  classes?: boolean;
  defaultParams?: boolean;
  destructuring?: boolean;
  /**
   * Enables support for the experimental object rest/spread properties (IMPORTANT: This is an experimental feature that may change significantly in the future. It’s recommended that you do not write rules relying on this functionality unless you are willing to incur maintenance cost when it changes.)
   */
  experimentalObjectRestSpread?: boolean;
  forOf?: boolean;
  generators?: boolean;
  /**
   * allow return statements in the global scope
   */
  globalReturn?: boolean;
  /**
   * enable global strict mode (if ecmaVersion is 5 or greater)
   */
  impliedStrict?: boolean;
  /**
   * enable JSX
   */
  jsx?: boolean;
  modules?: boolean;
  objectLiteralComputedProperties?: boolean;
  objectLiteralDuplicateProperties?: boolean;
  objectLiteralShorthandMethods?: boolean;
  objectLiteralShorthandProperties?: boolean;
  octalLiterals?: boolean;
  regexUFlag?: boolean;
  regexYFlag?: boolean;
  restParams?: boolean;
  spread?: boolean;
  superInFunctions?: boolean;
  templateStrings?: boolean;
  unicodeCodePointEscapes?: boolean;
  [key: string]: unknown;
}