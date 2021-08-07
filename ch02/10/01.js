// Don't do this!
const originalCharAt = String.prototype.charAt
String.prototype.charAt = function (pos) {
  console.log(`this: ${this}, typeof this: ${typeof this}, pos: ${pos}`)
  // this: primitive, typeof this: object, pos: 3
  // console.log(this, typeof this, pos)
  return originalCharAt.call(this, pos)
}
// console.log('HelloTypescript'.charAt(5))

// export default {}
