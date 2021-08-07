const checkedFetch: typeof fetch = async (input, init) => {
// declare function fetch(input: RequestInfo, init?: RequestInit): Promise<Response>;는 함수선언이기 때문에 타입으로 바로 사용 할 수 없으으로 간단하게 typof fetch를 하여 사용하면 된다.
  // typeof를 붙이면 타입이 되게끔
  const response = await fetch(input, init)
  if (!response.ok) {
    throw new Error('Request failed: ' + response.status)
  }
  return response
}

export default {}
