interface Square {
  width: number
}
interface Rectangle extends Square {
  height: number
}
type Shape = Square | Rectangle
// Shape 타입에 Square 이나 Rectangle 둘 중 하나가 들어옴

function calculateArea(shape: Shape) {
  if (shape instanceof Rectangle) {
    // ~~~~~~~~~ 'Rectangle' only refers to a type,
    // Rectangle은 타입만을 의미, 
    //           but is being used as a value here
    // 그런데 여기에서는 값으로 사용됩니다.
    return shape.width * shape.height
    //         ~~~~~~ Property 'height' does not exist
    // height프로퍼티 존재하지 않는다.
    //                on type 'Shape'
    // Shape 유형에.
  } else {
    return shape.width * shape.width
  }
}

export default {}
