// interface Tuple extends Array<unknown>{ // 이런식으로 확장해서 사용가능.
interface ITuple {
  0: number
  1: number
  length: 2
}

type Tuple = [number, number]
const t: Tuple = [10, 20] // OK
const t2: number[] = [10]
console.log(t.concat(t2))
// t.push(10)

// export default {}
