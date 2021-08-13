interface Vector3 {
  x: number
  y: number
  z: number
}
function getComponent(vector: Vector3, axis: 'x' | 'y' | 'z') {
  return vector[axis]
}
const v: { x: 1 | 3 | 5 } = {
  x: 1,
} // Type is { x: 1 | 3 | 5; }

// 명시적 타입구문을 제공하여 타입을 재정의 할 수 있습니다.
// x에는 1이나 3이나 5만 올수 있다.

const obj: {
  name: string,
  age: number,
  nationalCode: 82 | 88 | 92,
  ['personalInfo']: unknown
} = {
  name: 'juyoung',
  age: 20,
  nationalCode: 92,
  personalInfo: {
    level: 'Lv2',
    
  }
}

export default {}
