import type { ESLintSeverity } from './severity';

export type ESLintRuleConfig<T> = T extends Array<any>
  ? T
  : [config?: T];

export type ESLintRule<T> = ESLintSeverity | [
  severity: ESLintSeverity,
  ...config: ESLintRuleConfig<T>
]