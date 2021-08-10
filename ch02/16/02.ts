const xs = [1, 2, 3]
const keys = Object.keys(xs) // Type is string[]
for (const key in xs) {
  key // Type is string
  console.log(typeof key); // string
  const x = xs[key] // Type is number
  console.log(typeof key); // string
  // 원래는 안되는건데 타입스크립트에서 배열에 인덱스에 접근하려면 어쩔수 없으니 허용한거 같음. for in은 키값에 접근 for of는 값에 접근.
}
// console.log(keys); // string

// export default {}
