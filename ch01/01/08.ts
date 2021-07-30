// HIDE
interface State {
  name: string
  capital: string
}
// END

const states: State[] = [
  { name: 'Alabama', capital: 'Montgomery' },
  { name: 'Alaska', capitol: 'Juneau' },
  // ~~~~~~~~~~~~~~~~~ Did you mean to write 'capital'?
  { name: 'Arizona', capital: 'Phoenix' },
  // ...
]
// interface를 정의하고 타입으로 지정하면 Interface의 프로퍼티명과 다를경우 잡아줌.
export default {}
