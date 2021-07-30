const states = [
  { name: 'Alabama', capitol: 'Montgomery' },
  { name: 'Alaska', capitol: 'Juneau' },
  { name: 'Arizona', capitol: 'Phoenix' },
  // ...
]
for (const state of states) {
  console.log(state.capital)
  // ~~~~~~~ Property 'capital' does not exist on type
  //         '{ name: string; capitol: string; }'.
  //         Did you mean 'capitol'?
}
// ts로 작성할 경우 객체의 프로퍼티 명을 잘 못사용하는것도 잡아줌
// 하지만 사람이 애초에 오타를 넣어서 작성할 경우 (지금의 states 같이)그것까지는 알 수 없음
// 그래서 오브젝트에 인터페이스를 적용하여 검사함

export default {}
