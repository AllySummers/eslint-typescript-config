export type MakeArray<T> = T extends Array<any> ? T : [T];