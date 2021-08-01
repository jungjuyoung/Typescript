type AB = 'A' | 'B'
type AB12 = 'A' | 'B' | 12
// OK, {"A", "B"} is a subset of {"A", "B"}:
const ab: AB = Math.random() < 0.5 ? 'A' : 'B'
const ab12: AB12 = ab // OK, {"A", "B"} is a subset of {"A", "B", 12}
declare let twelve: AB12 // declare는 변수, 상수, 함수, 클래스가 어딘가에 이미 선언되어 있음을 알림, JS 코드로는 컴파일 되지 않고, Typescript에게 타입정보를 알리기만 한다

const back: AB = twelve
// ~~~~ Type 'AB12' is not assignable to type 'AB'
//        Type '12' is not assignable to type 'AB'

export default {}
