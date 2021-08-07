interface Room {
  numDoors: number
  ceilingHeightFt: number
}
function setDarkMode() {}
interface Options {
  title: string
  darkMode?: boolean
}
function createWindow(options: Options) {
  if (options.darkMode) {
    setDarkMode()
  }
  // ...
}
createWindow({
  title: 'Spider Solitaire',
  darkmode: true, //<-- 대소문자 틀려서 생긴것, darkMode로 써주면 Ok
  // ~~~~~~~~~~~~~ Object literal may only specify known properties, but
  //               'darkmode' does not exist in type 'Options'.
  //               Did you mean to write 'darkMode'?
})

export default {}
