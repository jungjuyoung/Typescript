interface Identified {
  id: string
}
interface Person {
  name: string
}
interface Lifespan {
  birth: Date
  death?: Date
}
type PersonSpan = Person & Lifespan
// & 연산자로 묶은 인터페이스는 Person 따로 Lifespan 따로가 아닌 모두가 있어야하는 합집합 && 연산자라고 생각하고, | 는 || 연산자로 생각.

const personSpan: PersonSpan = {
  name: 'juyoung',
  birth: new Date(),
  death: new Date()
}

export default {}
