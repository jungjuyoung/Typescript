interface Point2D{
  x: number
  y: number
}
// 중복을 제거해보자.
// function distance(a: { x: number; y: number }, b: { x: number; y: number }) {
function distance(a: Point2D, b: Point2D) {
  return Math.sqrt(Math.pow(a.x - b.x, 2) + Math.pow(a.y - b.y, 2))
}

export default {}
