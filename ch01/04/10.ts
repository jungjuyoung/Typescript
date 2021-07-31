class C {
  foo: string
  constructor(foo: string) {
    this.foo = foo
  }
  abc() { } // 메소드 추가
}

const c = new C('instance of C') // OK! 그저 객체를 뽑아낸것이기 떄문. 
const d: C = {
  foo: 'object literal',
  abc(){}

} // OK! 추가된 abc호출

export default {}
