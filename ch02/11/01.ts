interface Room {
  numDoors: number
  ceilingHeightFt: number
}
const r: Room = {
  numDoors: 1,
  ceilingHeightFt: 10,
  elephant: 'present',
  // ~~~~~~~~~~~~~~~~~~ Object literal may only specify known properties,
  //                    and 'elephant' does not exist in type 'Room'
  // 오브젝트 리터럴은 알려진 프로퍼티만 적용할수 있고 elephant는 Room타입에 존재하지 않는다.
}

export default {}
