interface Room {
  numDoors: number
  ceilingHeightFt: number
}
function setDarkMode() {}
interface Options {
  title: string
  darkMode?: boolean
}
const o: Options = { darkMode: true, title: 'Ski Free' }
// ~~~~~~~~ 'darkmode' does not exist in type 'Options'...
//대소문자 틀림 'darkMode'로 변경하면 됨.

export default {}
