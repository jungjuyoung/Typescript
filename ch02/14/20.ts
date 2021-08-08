const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: '#00FF00',
  label: 'VGA',
}
// 값에 해당하는 타입을 정의하고 싶을때 간단한 방법
type Options = typeof INIT_OPTIONS
type Fetch = typeof fetch

// interface Options {
//   width: number
//   height: number
//   color: string
//   label: string
// }

export default {}
