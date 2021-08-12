interface Product {
  id: string
  name: string
  price: number
}

function logProduct(product: Product) {
  const id: number = product.id
  // ~~ Type 'string' is not assignable to type 'number'
  const name: string = product.name
  const price: number = product.price
  console.log(id, name, price)
}
const furby = {
  name: 'Furby',
  id: 630509430963,
  price: 35,
}
logProduct(furby)
// ~~~~~ Argument .. is not assignable to parameter of type 'Product'
//         Types of property 'id' are incompatible
//         Type 'number' is not assignable to type 'string'
// Argument는 Product타입의 파라미터에 할당할 수 없다.
// id속성 유형이 호환되지 않는다.
// number타입은 string타입에 할당할 수 없다.
export default {}
