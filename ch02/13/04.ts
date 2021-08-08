type TState = {
  name: string
  capital: string
}
interface IState {
  name: string
  capital: string
}
type TDict = { [key: string]: string } // 인덱스로 뭐가 오든지 상관없고 key라는거에 문자열이 오고 거기에 문자열이 오기만 하면 되는
// 인덱스 시그니처는 타입과 인터페이스 모두에서 사용할 수 있습니다.
interface IDict {
  [key: string]: string
}

export default {}
