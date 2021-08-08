type TState = {
  name: string
  capital: string
}
interface IState {
  name: string
  capital: string
}
interface IStateWithPop extends TState {
  population: number
}
type TStateWithPop = IState & { population: number }

// 인터페이스와 타입은 서로 상호확장 가능하다.
// 인터페이스는 한번에 모든 타입을 검사하고, 유니온타입같은 복잡한 타입 확장이 불가능
// 타입과 &는 앞의 IState를 먼저 충족하는지 확인후 다음 타입을 검사
const s: IStateWithPop = {
  name: 's',
  capital: 'c',
  population:1
}
const s1: TStateWithPop = {
  name: 's',
  capital: 'c'
}

export default {}
