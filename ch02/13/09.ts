type TState = {
  name: string
  capital: string
}
interface IState {
  name: string
  capital: string
}
class StateT implements TState {
  // name: string = ''
  // capital: string = ''
  // 타입정의 부분에서 이미 타입정의가 되어있으니, 클래스 구현부에서 또 타입선언 안해도 됌.
  name = ''
  capital = ''
}
class StateI implements IState {
  // name: string = ''
  // capital: string = ''
  // 타입정의 부분에서 이미 타입정의가 되어있으니, 클래스 구현부에서 또 타입선언 안해도 됌.
  name = ''
  capital = ''
}

export default {}
