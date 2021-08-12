const cache: { [ticker: string]: number } = {}
function getQuote(ticker: string): Promise<any> {
  if (ticker in cache) {
    return cache[ticker] // 합수의 반환 타입을 명시하면 에러가 잡힘.
  }
  return fetch(`https://quotes.example.com/?q=${ticker}`)
    .then(response => response.json())
    .then(quote => {
      cache[ticker] = quote
      return quote
    })
}

export default {}
