// tsConfig: {"noImplicitAny":true,"strictNullChecks":true}

const el = document.getElementById('status')
el.textContent = 'Ready'
// ~~ Object is possibly 'null'
// Object는 null일 수 있다. 라고 경고가 뜸

if (el) {
  el.textContent = 'Ready' // OK, null has been excluded
}
el!.textContent = 'Ready' // OK, we've asserted that el is non-null

export default {}
