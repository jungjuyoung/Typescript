const a: number[] = [1, 2, 3]
const b: readonly number[] = a
const c: number[] = b
// ~ Type 'readonly number[]' is 'readonly' and cannot be
//   assigned to the mutable type 'number[]'

// readonly number[]은 읽기전용이며 변경가능유형의 number[]에 할당할 수 없습니다.
// 일반배열은 readonly배열에 할당가능
// readonly배열은 일반배열에 할당 불가능
// number[]은 readonly배열보다 기능이 많기 때문에 readonly배열의 sub타입이 된다.
export default {}
