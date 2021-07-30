interface Vector2D {
  x: number
  y: number
}
function calculateLength(v: Vector2D) {
  return Math.sqrt(v.x * v.x + v.y * v.y)
}
interface NamedVector {
  name: string
  x: number
  y: number
}
// calculateLength의 요구사항을 충족하기만 한다면 즉, 
// Vector2D 프로퍼티를 포함하면 
// 이렇게 해도 무방...
// interface NamedVector extends Vector2D{
//   name: string
// }

const v: NamedVector = { x: 3, y: 4, name: 'Zee' }
calculateLength(v) // OK, result is 5

export default {}
