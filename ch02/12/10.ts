const checkedFetch: typeof fetch = async (input, init) => {
  //  ~~~~~~~~~~~~   Type 'Promise<Response | HTTPError>'
  //                     is not assignable to type 'Promise<Response>'
  //                   Type 'Response | HTTPError' is not assignable
  //                       to type 'Response'
  const response = await fetch(input, init)
  if (!response.ok) {
    // return new Error('Request failed: ' + response.status)
    throw new Error('Request failed: ' + response.status)
    // fetch는 반환값으로 Response프로미스가 와야하는데 에러가 오면 안돼니, return 대신 throw로 변경하면 Ok
  }
  return response
}

export default {}
