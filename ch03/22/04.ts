interface A {
  a: number
}
interface B {
  b: number
}
function pickAB(ab: A | B) {
  if ('a' in ab) { // 속성체크 ab안에 a가 있으면 
    ab // Type is A 타입은 A
  } else { // 속성체크 ab안에 a가 없으면 
    ab // Type is B 타입은 B
  }
  // 그것도 아니면 모르겠다. A | B 둘중에 하나다.
  ab // Type is A | B
}

export default {}
