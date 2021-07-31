let age: number
age = '12'
// ~~~ Type '"12"' is not assignable to type 'number'
age = '12' as any // OK 강제로 any타입을 넣음.
age += 1 // OK; at runtime, age is now "121"

export default {}
