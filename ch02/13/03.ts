type TState = {
  name: string
  capital: string
}
interface IState {
  name: string
  capital: string
}
const wyoming: TState = {
  name: 'Wyoming',
  capital: 'Cheyenne',
  population: 500_000,
  // ~~~~~~~~~~~~~~~~~~ Type ... is not assignable to type 'TState'
  //                    Object literal may only specify known properties, and
  //                    'population' does not exist in type 'TState'
}
// 타입은 TState유형에 할당 할 수 없습니다.
// 오브젝트 리터럴은 알려진 속성만 지정할 수 있으며 population은 TState유형에 존재하지 않습니다.

export default {}
