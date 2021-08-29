import type { ESLintConfig } from './config';


export interface Overrides extends Pick<ESLintConfig, 'extends' | 'ecmaFeatures' | 'env' | 'globals' | 'parser' | 'parserOptions' | 'plugins' | 'rules' | 'settings'> {
  /**
   * Glob pattern for files to apply 'overrides' configuration, relative to the directory of the config file
   */
  files: string | [string, ...Array<string>];
  /**
   * If a file matches any of the 'excludedFiles' glob patterns, the 'overrides' configuration won’t apply
   */
  excludedFiles?: string | Array<string>;
  /**
   * To specify a processor, specify the plugin name and processor name joined by a forward slash
   */
  processor?: string;
}