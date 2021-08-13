interface Vector3 {
  x: number
  y: number
  z: number
}
function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
  return vector[axis]
}
let x = 'x'
x = 'a'
x = 'Four score and seven years ago...'

// x는 자바스크립트 런타임에서 아무런 문제가 없음.

export default {}
