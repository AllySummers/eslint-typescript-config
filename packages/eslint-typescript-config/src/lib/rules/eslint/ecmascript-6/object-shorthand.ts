/**
 * @name object-shorthand
 * @link https://eslint.org/docs/rules/object-shorthand
 * @description require or disallow method and property shorthand syntax for object literals
 * @auto-fixable
 */
export type ObjectShorthand = ObjectShorthand.AlwaysMethodsPropertiesWhen | ObjectShorthand.OptionsShort | ObjectShorthand.OptionsLong;

/**
 * @name object-shorthand
 * @link https://eslint.org/docs/rules/object-shorthand
 * @description require or disallow method and property shorthand syntax for object literals
 * @auto-fixable
 */
export namespace ObjectShorthand {
  export type AlwaysMethods = 'always' | 'methods';
  
  export type AlwaysMethodsProperties = AlwaysMethods | 'properties';

  export type AlwaysMethodsPropertiesWhen = AlwaysMethodsProperties | 'never' | 'consistent' | 'consistent-as-needed';

  export interface AvoidQuotes {
    avoidQuotes?: boolean;
  }

  export interface AlwaysMethodsOptions extends AvoidQuotes {
    ignoreConstructors?: boolean;
    avoidExplicitReturnArrows?: boolean;
  }

  export type OptionsShort = [
    option: AlwaysMethodsProperties,
    config?: AvoidQuotes
  ]

  export type OptionsLong = [
    option: AlwaysMethods,
    config?: AlwaysMethodsOptions
  ];
  
}
