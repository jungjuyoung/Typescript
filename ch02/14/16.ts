interface Options {
  width: number
  height: number
  color: string
  label: string
}
// interface OptionsUpdate {
//   width?: number
//   height?: number
//   color?: string
//   label?: string
// }

// 1. OptionsUpdate를 type으로 중복제거하여 만든다.
type OptionsUpdate = { [K in keyof Options]?: Options[K] }
// 2. Partial이라는것을 사용하여 1번을 더 간단하게 중복제거하여 type으로 만든다.
type PatialOptions = Partial<Options>
type OptionsKeys = keyof Options
// Type is "width" | "height" | "color" | "label"

class UIWidget {
  constructor(init: Options) {
    /* ... */
  }
  update(options: OptionsUpdate) {
    /* ... */
  }
}

export default {}
