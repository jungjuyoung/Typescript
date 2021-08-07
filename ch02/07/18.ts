const triple: [number, number, number] = [1, 2, 3]
const double: [number, number] = triple
// ~~~~~~ '[number, number, number]' is not assignable to '[number, number]'
//          Types of property 'length' are incompatible
//          Type '3' is not assignable to type '2'

type tuple = [number, object]
 
const num: tuple = [1, {true}]

// tuple은 정확히 일치 해야한다. 정의된 타입의 순서, 갯수
export default {}
