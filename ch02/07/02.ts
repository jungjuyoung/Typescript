type A = 'A'
// 타입추론에 의해 문자열 값을 넣으면 문자열 타입이 지정되는데 type A = 'A'경우 'A'값이 타입이 됨.
const A = 'A'
// const로 선언하면 값 변경이 불가능해서 그대로 타입으로 적용(type A = 'A' 동일)
// let A = 'A' let으로 선언하면 string
type B = 'B'
type Twelve = 12
const number:Twelve = 14 // 14형식은 12형식에 할당할 수 없습니다.

// export default {}

const userName: string = 'juyoung'
const greeting: string = `Hello, developer ${userName} who loves typescript?`
console.log(greeting)