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
// const v = 하면 타입스크립트는 값을 해석하는게 아니고 런타임시 타입을 해석 해서 typeof가 리턴할 수 있는 모든 리터럴 형식을 모두 유니온타입으로 사용 
type T = typeof Cylinder // Type is typeof Cylinder
// type T는 타입스트크립트가 typeof Cylinder로 사용
export default {}
