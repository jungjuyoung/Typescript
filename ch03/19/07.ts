interface Product {
  id: number
  name: string
  price: number
}

// function logProduct(product: Product) {
//   const id: number = product.id
//   const name: string = product.name
//   const price: number = product.price
//   console.log(id, name, price)
// }

// 매개변수에서 타입지정 했기때문에, 함수의 본문안에서 타입 지정할 필요없음
// function logProduct(product: Product) {
//   const id = product.id
//   const name = product.name
//   const price = product.price
//   console.log(id, name, price)
// }

function logProduct({ id, name, price }: Product) {
  // const id = product.id
  // const name = product.name
  // const price = product.price
  console.log(id, name, price)
}

export default {}
