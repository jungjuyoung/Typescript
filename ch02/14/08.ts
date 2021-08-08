interface Person {
  firstName: string
  lastName: string
}

// 07.ts에서는 인터페이스 상속을 통해 다른부분만 기명하였는데 type에서는 &를 이용해 이렇게 작성할 수 있다.
type PersonWithBirthDate = Person & { birth: Date }

export default {}
