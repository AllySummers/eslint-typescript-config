import { EcmaFeatures } from './ecma-features';
import { EcmaVersion } from './ecma-version';
import { SourceType } from './source-type';

export interface ParserOptions {
  /**
   * By default, ESLint supports only ECMAScript 5 syntax. You can override that setting to enable support for ECMAScript 6 as well as JSX by using configuration settings.
   */
  ecmaFeatures?: EcmaFeatures;
  ecmaVersion?: EcmaVersion;
  sourceType?: SourceType;
  [key: string]: unknown;
}