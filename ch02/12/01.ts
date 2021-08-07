// 선언식
function rollDice1(sides: number): number {
  /* COMPRESS */ return 0 /* END */
} // Statement
// 표현식
const rollDice2 = function (sides: number): number {
  /* COMPRESS */ return 0 /* END */
} // Expression
// 표현식
const rollDice3 = (sides: number): number => {
  /* COMPRESS */ return 0 /* END */
} // Also expression


// 타입스크립트에서는 함수를 표현식으로 사용하기 권장한다. 
// 함수의 매개변수, 반환값까지 타입스크립트를 지정하여 재사용 할 수 있다.
export default {}
