interface Person {
  first: string
  last: string
}
const p: Person = { first: 'Jane', last: 'Jacobs' }
//    -           --------------------------------- Values
//       ------ Type
function email(p: Person, subject: string, body: string): Response {
  //     ----- -          -------          ----  Values
  //              ------           ------        ------   -------- Types
  // COMPRESS
  return new Response()
  // END
}

class Cylinder {
  radius = 1
  height = 1
}

function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) {
    shape // OK, type is Cylinder
    shape.radius // OK, type is number
  }
}
const v = typeof Cylinder // Value is "function"
type T = typeof Cylinder // Type is typeof Cylinder
type PersonEl = Person['first' | 'last'] // Type is string
type Tuple = [string, number, Date]
type TupleEl = Tuple[number] // Type is string | number | Date
// Tuple[0] = string 타입 지정, Tuple[1] = number 타입 지정, Tuple[2] = Date타입 지정
// Tuple에 string | number | Data 유니온 타입이 
// number가 0, 1, 2 중에 하나만 올 수 있으니까
export default {}
