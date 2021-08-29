/**
 * @name quote-props
 * @link https://eslint.org/docs/rules/quote-props
 * @description require quotes around object literal property names
 * @auto-fixable
 */
export type QuoteProps = [
  option?: QuoteProps.WhenOption,
  config?: QuoteProps.Overrides
];

/**
 * @name quote-props
 * @link https://eslint.org/docs/rules/quote-props
 * @description require quotes around object literal property names
 * @auto-fixable
 */
export namespace QuoteProps {
  export type WhenOption = 'always' | 'as-needed' | 'consistent' | 'consistent-as-needed';

  export interface Overrides {
    keywords?: boolean;
    unnecessary?: boolean;
    numbers?: boolean;
  }  
}

