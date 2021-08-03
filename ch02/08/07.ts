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
type T1 = typeof p // Type is Person
// T1은 Person Type이 오고
type T2 = typeof email
// Type is (p: Person, subject: string, body: string) => Response
// T2는 function email(p: Person, subject: string, body: string): Response 까지가 타입으로 오고, 함수의 Response 다음 {...}은 값임.

const v1 = typeof p // Value is "object"
const v2 = typeof email // Value is "function"

export default {}
