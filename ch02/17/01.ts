function arraySum(arr:readonly number[]) {
  // const a = [...arr] 이렇게 하면 해결되는데...
  // readonly로 해놓으면 push나 pop을 인터페이스에 정의해좋지 않아서 에러
  // console.log(a)
  let sum = 0, num
  while ((num = arr.pop()) !== undefined) {
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
// 1회차
// i = 0
// nums = [0]
// sum = 0
// nums = []

// 2회차
// i = 1
// nums = [1]
// sum = 1
// nums = []

// 3회차
// i = 2
// nums = [2]
// sum = 2
// nums = []


printTriangles(5)
// export default {}
