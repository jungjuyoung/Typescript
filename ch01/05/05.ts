// let person = { fisrt: 'Micheal' } 이렇게 선언을 하면 person. 만 써도 해당하는 프로퍼티가 자동완성으로 보여줌. 타입스크립트가 인지하고 있음.
// person.
let person: any = { fisrt: 'Micheal' }
// person. any를 지정하면 person.을 해도 해당하는 프로퍼티를 타입스크립트가 인지하지 못해서 자동완성이 되지 않음.
interface Person {
  firstName: string
  last: string
}
const formatName = (p: Person) => `${p.firstName} ${p.last}`
const formatNameAny = (p: any) => `${p.first} ${p.last}`
// Person 인터페이스의 firstName을 찾아서 기호이름바꾸기를 하면 다 함께 바뀌는데 any타입으로 지정한것은 찾지 못하여 바꾸지 않음.
export default {}
