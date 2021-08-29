/**
 * @name no-param-reassign
 * @link https://eslint.org/docs/rules/no-param-reassign
 * @description disallow reassigning  parameters
 */
export type NoParamReassign = NoParamReassign.PropsFalse | NoParamReassign.PropsTrue;

/**
 * @name no-param-reassign
 * @link https://eslint.org/docs/rules/no-param-reassign
 * @description disallow reassigning  parameters
 */
export namespace NoParamReassign {
  export interface PropsFalse {
    props?: false;
  }

  export interface PropsTrue {
    props: true;
    ignorePropertyModificationsFor?: Array<string>;
    ignorePropertyModificationsForRegex?: Array<string>;
  }
}
