// type MyOmit<T, K extends keyof T > = Pick<T, Exclude<keyof T, K>>
type MyOmit<T, K extends keyof T > = {
  [P in Exclude<keyof T, K>]: T[P];
}
