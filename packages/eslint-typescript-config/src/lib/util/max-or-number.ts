export interface Maximum {
  /**
   * @min 0
   */
  max?: number;
  /**
   * @min 0
   * @deprecated
   */
  maximum?: number;
}

export interface Max {
  /**
   * @min 0
   */
  max?: number;
}

/**
 * @min 0
 */
export type MaximumOrNumber = number | Max;

/**
 * @min 0
 */
export type MaxOrNumber = number | Max;

/**
 * @min 0
 */
export type MaxNum = number;