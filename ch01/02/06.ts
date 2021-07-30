// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}

const x: number = null
//    ~ Type 'null' is not assignable to type 'number'
//tsConfig: {"noImplicitAny":true,"strictNullChecks":true} 를 주면 x의 타입을 number로 하고 null을 대입하면 null은 number 타입에 할당 할 수 없다고 경고가 뜸.
export default {}
