const x: never = 12
// ~ Type '12' is not assignable to type 'never'
// never는 도달하면 안되는 곳에 보통 할당한다. 에러객체 같은
export default {}

// 결코 발생하지 않는 값
function infiniteLoop():never {
  while(true){}
}
// 에러객체 같은 곳에서 사용
function error(message: string): never {
  throw new Error(message);
}