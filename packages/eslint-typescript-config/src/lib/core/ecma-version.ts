/**
 * Set to 3, 5, 6, 7, 8, 9, 10, 11 (default), 12 or 'latest' to specify the version of ECMAScript syntax you want to use. 
 * You can also set to 2015 (same as 6), 2016 (same as 7), 2017 (same as 8), 2018 (same as 9), 2019 (same as 10), 
 * 2020 (same as 11) or 2021 (same as 12) to use the year-based naming. 
 * 'latest' always enables the latest supported ECMAScript version.
 */
export type EcmaVersion = 3 | 5 | 6 | 2015 | 7 | 2016 | 8 | 2017 | 9 | 2018 | 10 | 2019 | 11 | 2020 | 12 | 2021 | 'latest';