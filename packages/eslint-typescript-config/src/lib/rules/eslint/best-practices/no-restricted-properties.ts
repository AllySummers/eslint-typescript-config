/**
 * @name no-restricted-properties
 * @link https://eslint.org/docs/rules/no-restricted-properties
 * @description disallow certain properties on certain objects
 */
export type NoRestrictedProperties = Array<NoRestrictedProperties.ConfigWithObject | NoRestrictedProperties.ConfigWithProperty>

/**
 * @name no-restricted-properties
 * @link https://eslint.org/docs/rules/no-restricted-properties
 * @description disallow certain properties on certain objects
 */
export namespace NoRestrictedProperties {
  export interface ConfigWithProperty {
    object?: string;
    property: string;
    message?: string;
  }

  export interface ConfigWithObject {
    object: string;
    property?: string;
    message?: string;
  }
}