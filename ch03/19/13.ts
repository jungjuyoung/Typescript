interface Product {
  id: string
  name: string
  price: number
}

function logProduct(product: Product) {
  const id: number = product.id
  // ~~ Type 'string' is not assignable to type 'number'
  // 매개변수에 Product 타입을 지정하면 잘못된 타입을 지정하자마자 에러.ㄴ
  const name: string = product.name
  const price: number = product.price
  console.log(id, name, price)
}
const elmo: Product = {
  name: 'Tickle Me Elmo',
  id: '048188 627152',
  price: 28.99,
}

export default {}
