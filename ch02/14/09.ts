interface State {
  userId: string
  pageTitle: string
  recentFiles: string[]
  pageContents: string
}
// type TopNavState = {
//   [K in 'userId' | 'pageTitle' | 'recentFiles']:State[K]
  // userId: State['userId']
  // pageTitle: State['pageTitle']
  // recentFiles: State['recentFiles']
// }
type TopNavState = Pick<State, 'userId' | 'pageTitle' | 'recentFiles'>;
  // userId: State['userId']
  // pageTitle: State['pageTitle']
  // recentFiles: State['recentFiles']


// State에만 있는 pageContents프로퍼티를 위해 TopNavState를 정의하는게 바람직해 보임.
// 1. interface를 type으로 변경
// 2. TopNavState의 중복코드를 제거하고싶다.
// 3. 맵핑된 type은 배열의 필드를 루프 도는것과 같은 방식이다. Pick
// 4. Pick을(함수호출과 같음) 이용하여 다른 방식으로 중복코드를 제거해보자.
export default {}
