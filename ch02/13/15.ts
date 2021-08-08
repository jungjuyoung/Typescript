interface IState {
  name: string
  capital: string
}
interface IState {
  population: number
}
const wyoming: IState = {
  // name: 'Wyoming',
  // capital: 'Cheyenne',
  // population: 500_000,
} // OK

// 인터페이스 타입병합은 동일이름으로 선언하면 extends같이 합집합이 됨.
// 타입병합 같은 문법은 되도록 사용하지 않는게 좋지 않나...

export default {}
