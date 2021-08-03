interface Person {
  first: string
  last: string
}
const p: Person = { first: 'Jane', last: 'Jacobs' }
//    -             ----------------------------- Values
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
  // class는 값이자 타입이 되니까
  if (shape instanceof Cylinder) { // 여기서는 값으로 쓰임
    shape // OK, type is Cylinder 여기서는 type으로 쓰임
    shape.radius // OK, type is number // 여기서는 값으로 쓰임
  }
}

export default {}
