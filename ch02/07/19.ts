type T = Exclude<string | Date, string | number> // Type is Date
type NonZeroNums = Exclude<number, 0> // Type is still just number
type NonZeroNums2 = Exclude<number | 0, string | 0> // Type is still just number

const a:NonZeroNums2 = 4

export default {}
