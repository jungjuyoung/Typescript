let age: number
age = '12'
// ~~~ Type '"12"' is not assignable to type 'number'
age = '12' as any // OK any타입을 강제로 넣음.

export default {}
