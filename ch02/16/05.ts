const xs = [1, 2, 3]
for (let i = 0; i < xs.length; i++) {
  const x = xs[i]
  if (x < 0) break
}
// 대부분 브라우저나 자바스크립트 엔진에서 for..in문은 for..of문이나 for루프들 보다 몇배나 느리다
export default {}
