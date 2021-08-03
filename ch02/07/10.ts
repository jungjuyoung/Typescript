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
interface Lifegoeson {
  name: string
  birth: Date
  death?: Date
}
type PersonSpan = Person & Lifespan
type K = keyof (Person | Lifespan) // Type is never 
// Person과 Lifespan에 겹치는 것이 없기 때무네 never가 됨.
// & 연산자로 묶은 인터페이스는 Person 따로 Lifespan 따로가 아닌 모두가 있어야하는 합집합 && 연산자라고 생각하고, | 는 || 연산자로 생각.
// 근데 keyof로 할 경우 그 개념이 뒤집어진다.
// keyof (A&B) === (keyof A) | (keyof B)
// keyof (A|B) === (keyof A) & (keyof B)
// 그래서 type K = keyof (Person | Lifespan)의 K는 Person의 키와 Lifespan키가 들어간다.
type B = keyof(Lifespan | Lifegoeson)

export default {}
