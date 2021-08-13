interface Vector3 {
  x: number
  y: number
  z: number
}
function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
  return vector[axis]
}
// let x = 'x' // a. 타입추론에 의해 x:string 으로 지정. 타입을 x | y | z로 지정한것이 아님.
const x = 'x' // a. 해결.
let vec = { x: 10, y: 20, z: 30 }
getComponent(vec, x)
// ~ Argument of type 'string' is not assignable to
//   parameter of type '"x" | "y" | "z"'

// a. string타입은 유니온 타입의 "x" | "y" | "z" 에 할당할 수 없다.
const a: 'a' | 'b' | 'c' = 'b'

export default {}
