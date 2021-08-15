function contains(text: string, terms: string | string[]) {
  const termList = Array.isArray(terms) ? terms : [terms]
  // Array.isArray(terms)가 Array면 그냥 배열이 오고 아니면 string을 배열에 감싸서 만들어라
  termList // Type is string[] 그럼 여기는 무조건 string[]
  // ...
}

export default {}
