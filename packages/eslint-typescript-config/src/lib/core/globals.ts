export type GlobalOption = 'readonly' | 'writable' | 'off' | boolean;

/**
 * Set each global variable name equal to true to allow the variable to be overwritten or false to disallow overwriting.
 */
export interface Globals {
  [key: string]: GlobalOption;
}