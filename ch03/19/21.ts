interface Vector2D {
  x: number
  y: number
}
function add(a: Vector2D, b: Vector2D):Vector2D {
  return { x: a.x + b.x, y: a.y + b.y }
}
// 문제는 되지 않지만 반환타입을 지정해주면 직관적임. 

export default {}
