// HIDE
interface Options {}
// END

// 함수에 사용할 타입을 선언.
type HTTPFunctions = (url: string, opts: Options) => Promise<Response> 
  
// 함수 선언문에서는 type선언한것을 적용하기 어려우니 표현식을 사용하라고 이전 item13에서 나옴.
// function get(url: string, opts: Options): Promise<Response> {
//   /* COMPRESS */ return Promise.resolve(new Response()) /* END */
// }
const get: HTTPFunctions = (url, opts) =>{
  /* COMPRESS */ return Promise.resolve(new Response()) /* END */
}

// function post(url: string, opts: Options): Promise<Response> {
//   /* COMPRESS */ return Promise.resolve(new Response()) /* END */
// }
const post:HTTPFunctions = (url, opts) => {
  /* COMPRESS */ return Promise.resolve(new Response()) /* END */
}

export default {}
