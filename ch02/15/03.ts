interface Rocket {
  name: string
  variant: string
  thrust_kN: number
}
const falconHeavy: Rocket = {
  name: 'Falcon Heavy',
  variant: 'v1',
  thrust_kN: 15_200, // es2021에서 추가된 숫자 구분선 15200과 동일.
}

export default {}
