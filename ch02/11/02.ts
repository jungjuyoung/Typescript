interface Room {
  numDoors: number
  ceilingHeightFt: number
}
const obj = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
}
const r: Room = obj // OK

// 인터페이스를 직접할당 하지않고 임시객체 r을 만들고 그것을 할당한 변수에 타입을 지정하면 오류가 발생하지 않는다. 인터페이스를 충족하고 넘어가면 허용
// const r: Room = {
//   numDoors: 1,
//   ceilingHeightFt: 10,
//   elephant: 'present',
//   // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known properties,
//   //                    and 'elephant' does not exist in type 'Room'
//   // 오브젝트 리터럴은 알려진 프로퍼티만 적용할수 있고 elephant는 Room타입에 존재하지 않는다.
// }

export default {}
