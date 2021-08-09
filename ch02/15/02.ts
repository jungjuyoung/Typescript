type Rocket = { [property: string]: string }
// 인덱스 시그니처
// property은 key의 위치만 표시 key type은 string, number, symbol의 조합이어야 하지만 보통은 string 값의 type은 어느것도 허용
const rocket: Rocket = {
  name: 'Falcon 9',
  variant: 'v1.0',
  thrust: '4,940 kN',
} // OK

export default {}
