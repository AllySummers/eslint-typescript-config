/**
 * @name sort-imports
 * @link https://eslint.org/docs/rules/sort-imports
 * @description enforce sorted import declarations within modules
 * @auto-fixable
 */
export interface SortImports {

}

/**
 * @name sort-imports
 * @link https://eslint.org/docs/rules/sort-imports
 * @description enforce sorted import declarations within modules
 * @auto-fixable
 */
export namespace SortImports {
  export type MemberSyntaxSortOrder = 'none' | 'all' | 'multiple' | 'single';

  export type MemberSyntaxSortOrderTuple = [MemberSyntaxSortOrder, MemberSyntaxSortOrder, MemberSyntaxSortOrder, MemberSyntaxSortOrder];

  export interface Advanced {
    /**
     * @default false
     */
    ignoreCase?: boolean;
    memberSyntaxSortOrder?: MemberSyntaxSortOrderTuple;
    /**
     * @default false
     */
    ignoreDeclarationSort?: boolean;
    /**
     * @default false
     */
    ignoreMemberSort?: boolean;
    /**
     * @default false
     */
    allowSeparatedGroups?: boolean;
  }
  
}
