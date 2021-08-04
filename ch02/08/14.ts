interface Person {
  first: string
  last: string
}
// function email(options: { person: Person; subject: string; body: string }) {
// function email({ person: Person, subject: string, body: string }) { // Person, string, string이 변수로 사용되서 변수에 타입지정을 하지않고 값도할당 하지 않았으니 any타입으로 되버림

function email({person, subject, body}: { person: Person, subject: string, body: string }) {
  // ...
  console.log(person)
  console.log(subject)
  console.log(body)
}

function obj(paramOBJ: { person:Person, subject:string, body?:number }): void{
  const { person, subject, body } = paramOBJ
  // 매개변수로 객체인 paramOBJ 받는다
  // paramOBJ.person의 타입은 Person,
  // paramOBJ.subject의 타입은 string,
  // paramOBJ.body의 타입은 number. ?는 값이 있을수도 있고 없을수도 있다. number | undefined
}

type C = { first: string, last?: string }
function func({first, last} : C): void {
  
}

// 기본값 적용하기
function func2({first, last = ""} : C) : void{
  
}

export default {}
