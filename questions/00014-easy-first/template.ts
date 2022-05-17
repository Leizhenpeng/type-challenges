// type First<T extends any[]> = T extends [infer F, ... infer _R ] ? F : never
// type First<T extends any[]> = T extends[] ? never: T[0]
type First<T extends any[]> = T extends { 0: infer F } ? F : never
