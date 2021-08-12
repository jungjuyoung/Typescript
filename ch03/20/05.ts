function fetchProduct(id: string) {}
function fetchProductBySerialNumber(id: number) {}
const id = '12-34-56'
fetchProduct(id)

{
  // 오 이방법 좋은데? 블락스코프를 생성해서 같은 이름의 변수 const id를 두개 생성.
  // 별도의 변수명으로 분리하는것이 사람에게 혼동을 주지않아 좋다고 책에 나와있지만 상황에 따라 
  // 블록스코프로 동일한 이름의 변수를 이런식으로 사용해도 좋을것 같다는 개인적인 의견.
  const id = 123456 // OK
  fetchProductBySerialNumber(id) // OK
}

export default {}
