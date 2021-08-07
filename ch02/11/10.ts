interface LineChartOptions {
  logscale?: boolean
  invertedYAxis?: boolean
  areaChart?: boolean
}
// 약한타입
const opts = { logScale: true } // 대소문자 틀림. 공통되는 속성이 하나도 없기때문에 에러 
// weak타입은 한개라도 맞는 속성이 있어야함.
const o: LineChartOptions = opts
// ~ Type '{ logScale: boolean; }' has no properties in common
//   with type 'LineChartOptions'

export default {}
