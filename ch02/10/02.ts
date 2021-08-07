function getStringLen(foo: String) {
  console.log(`foo.length:${foo.length}, typeof: ${typeof foo}`)
  return foo.length
}

getStringLen('hello') // OK
getStringLen(new String('helloTypescript')) // OK
// 왜... 통과하지.. Object타입인디....
// console.log(typeof new String('helloTypescript'))

// export default {}
