interface Person {
  firstName: string
  middlename: string
  lastName: string
}

interface PersonWithBirthDate extends Person{
  birth: Date
}

export default {}
