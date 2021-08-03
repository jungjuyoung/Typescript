type T = Exclude<string | Date, string | number> // Type is Date
// 좌측을 string | Date 기준으로 우측의 string | number을 배제한다.
// 그러니까 string | number 유니언중에 해당하는것 들을 제외한다.
// 그러니까 Date만 남음.
type NonZeroNums = Exclude<number, 0> // Type is still just number

export default {}
