function arraySum(arr: readonly number[]) {
  let sum = 0
  for (const num of arr) {
    sum += num
  }
  return sum
}

function printTriangles(n: number) {
  const nums = []
  for (let i = 0; i < n; i++) {
    nums.push(i)
    console.log(arraySum(nums))
  }
}
printTriangles(5)
// 함수안에서 매개변수를 변경하지 않으면 readonly로 선언해야합니다. 의도치 않은 변경을 막을수 있다.
// export default {}
