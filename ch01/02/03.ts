// tsConfig: {"noImplicitAny":true}

function add(a, b) {
  // ~    Parameter 'a' implicitly has an 'any' type
  //    ~ Parameter 'b' implicitly has an 'any' type
  return a + b
}
// tsConfig의 noImplicitAny:true를 주고 매개변수의 타입을 지정하지않으면 강제적으로 any가 지정된다는 경고가 뜸

export default {}
