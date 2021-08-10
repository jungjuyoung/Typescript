const xs = [1, 2, 3]
const tupleLike: ArrayLike<string> = {
  // '0': 'A',
  // '1': 'B',
  0: 'A', // property 0 string
  1: 'B', // property 1 string
  length: 2,
} // OK

console.log(tupleLike);


// export default {}
