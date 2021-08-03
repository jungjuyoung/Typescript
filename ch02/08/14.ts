interface Person {
  first: string
  last: string
}
// function email(options: { person: Person; subject: string; body: string }) {
// function email({ person: Person, subject: string, body: string }) { // Person, string, string이 변수로 사용되서 변수에 타입지정을 하지않고 값도할당 하지 않았으니 any타입으로 되버림

function email({person, subject, body}: { person: Person, subject: string, body: string }) {
  // ...
  console.log(person)
  console.log(subject)
  console.log(body)
}

export default {}
