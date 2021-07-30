// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}

const x: number | null = null
// const x: number | string = ''
// const x: number | string = 1
// typescript에서 type의 || 를 | 하나로 사용하면 된다.
// x: number | null을 지정하면 x에는 number or null의 값이 들어올수 있다
export default {}
