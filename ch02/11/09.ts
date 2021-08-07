interface Options {
  darkMode?: boolean // darkMode 선택적으로 있어도 되고 없어도 되고, 
  [otherOptions: string]: unknown // 인덱스 시그니처
  // [othersOptions:string]으로 추가되는 다른 애들은 아무렇게나 오게
}
const o: Options = { darkmode: true } // OK

export default {}
