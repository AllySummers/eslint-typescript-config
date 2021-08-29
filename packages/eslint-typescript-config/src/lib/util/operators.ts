export type BitwiseOperators =
  | '^'
  | '|'
  | '&'
  | '<<'
  | '>>'
  | '>>>'
  | '^='
  | '|='
  | '&='
  | '<<='
  | '>>='
  | '>>>='
  | '~';

export type CoercionOperators = '~' | '!!' | '+' | '*';

export type ArithmeticOperators = '+' | '-' | '*' | '/' | '%' | '**';

export type ComparisonOperators =
  | '=='
  | '!='
  | '==='
  | '!=='
  | '>'
  | '>='
  | '<'
  | '<=';

export type LogicalOperators = '&&' | '||';

export type RelationalOperators = 'in' | 'instanceof';

export type TernaryOperator = '?:';

export type CoalesceOperator = '??';

export type AllOperators = ArithmeticOperators | BitwiseOperators | ComparisonOperators | LogicalOperators | RelationalOperators | TernaryOperator | CoalesceOperator;

export type DefaultOperatorGroups = ArithmeticOperators | BitwiseOperators | ComparisonOperators | LogicalOperators | RelationalOperators;