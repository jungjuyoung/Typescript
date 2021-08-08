interface Person {
  firstName: string
  lastName: string
}

// 인터페이스 상속을 통해서 다른 부분만 기명으로 작성하면된다. 
// 08.ts같은 방법도 있다.
interface PersonWithBirthDate extends Person {
  birth: Date
}

export default {}
