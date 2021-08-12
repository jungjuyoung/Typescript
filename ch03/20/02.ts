function fetchProduct(id: string) {}
function fetchProductBySerialNumber(id: number) {}
// let id = '12-34-56' // string 타입으로 추론.
let id: number | string = '12-34-56' // 1번 문제 모두 해결.
fetchProduct(id)

let serial = 123456 // 1. string타입에 number 할당하니까 에러.
// ~~ '123456' is not assignable to type 'string'.
fetchProductBySerialNumber(serial) // 1. number타입의 매개변수에 string을 할당해서 에러.
// ~~ Argument of type 'string' is not assignable to
//    parameter of type 'number'

// 서로 연관이 없는 두 아이디는 별도로 분리하는게 낫다. id와 serial로 바꾸는게 좋다.

export default {}
