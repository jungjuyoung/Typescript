// tsConfig: {"noImplicitAny":false}

function add(a: number, b: number): number
function add(a: string, b: string): string

function add(a, b) { // tsConfig: {"noImplicitAny: false"} 설정해 놓으면 타입지정을 하지 않을때 any타입으로 됨
  return a + b
}

const three = add(1, 2) // Type is number
const twelve = add('1', '2') // Type is string

export default {}
