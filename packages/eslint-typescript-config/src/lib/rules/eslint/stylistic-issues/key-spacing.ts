/**
 * @name key-spacing
 * @link https://eslint.org/docs/rules/key-spacing
 * @description enforce consistent spacing between keys and values in object literal properties
 * @auto-fixable
 */
export type KeySpacing = KeySpacing.OptionA | KeySpacing.OptionB | KeySpacing.OptionC;

/**
 * @name key-spacing
 * @link https://eslint.org/docs/rules/key-spacing
 * @description enforce consistent spacing between keys and values in object literal properties
 * @auto-fixable
 */
export namespace KeySpacing {
  export type ColonValue = 'colon' | 'value';
  export type StrictMin = 'strict' | 'minimum';

  export interface BeforeAfterColon {
    beforeColon?: boolean;
    afterColon?: boolean;
  }

  export interface ModeColon extends BeforeAfterColon {
    mode?: StrictMin;
  }

  export interface ModeOnColon extends ModeColon {
    on?: ColonValue;
  }

  export type AlignOption = ColonValue | ModeOnColon;

  export interface OptionA extends ModeColon {
    align?: AlignOption;
  }

  export interface OptionB {
    singleLine?: ModeColon;
    multiLine?: OptionA;
  }

  export interface OptionC {
    singleLine?: ModeColon;
    multiLine?: ModeColon;
    align?: ModeOnColon;
  }
}