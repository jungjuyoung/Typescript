interface Person {
  name: string
}
const body = document.body
const el = body as unknown as Person
// const el = body as Person
// ~~~~~~~~~~~~~~ Conversion of type 'HTMLElement' to type 'Person'
//                may be a mistake because neither type sufficiently
//                overlaps with the other. If this was intentional,
//                convert the expression to 'unknown' first

// HTMLElemnt유형을 Person유형으로 두 유형 모두 다른 유형과 충분히 겹치지 않기 때문에 
// 실수일 수 있습니다. 이것이 의도적이라면 표현식을 unknown으로 먼저 변환하세요.

export default {}
