type AB = 'A' | 'B'
type AB12 = 'A' | 'B' | 12
const a: AB = 'A' // OK, value 'A' is a member of the set {'A', 'B'}
const c: AB = 'C'
// ~ Type '"C"' is not assignable to type 'AB'
// C는 AB유형에 할당 할 수 없다.
export default {}
