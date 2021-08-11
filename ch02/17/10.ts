interface Outer {
  inner: {
    x: number
  }
  // a. 인덱스 시그니처로 설정해놓으면 읽기는 허용하돼 쓰기는 방지
  [x:string]: any
}
const o: Readonly<Outer> = { inner: { x: 0 } ,a: 1, b:2} // a. 처음에 쓸때는 허용.
o.inner = { x: 1 }
// ~~~~ Cannot assign to 'inner' because it is a read-only property
o.inner.x = 1 // OK
o.a = 10 // a. 나중에 추가는 안됌.

// o.inner를 직접바꾸는것은 안됨.
// shallow하게 readonly가 지정되어있어서 o.inner안의 값을 변경하는것은 된다.
export default {}
