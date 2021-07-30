// tsConfig: {"noImplicitAny":true,"strictNullChecks":false}

const x: number = null // OK, null is a valid number
//  tsConfig: {"noImplicitAny":true,"strictNullChecks":false} 를 하고 x의 값에 number를 지정 nulld을 할당 하면 number로 유효한 숫자로 인식.
export default {}
