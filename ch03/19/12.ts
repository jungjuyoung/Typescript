// HIDE
namespace express {
  export interface Request {}
  export interface Response {
    send(text: string): void
  }
}
interface App {
  get(path: string, cb: (request: express.Request, response: express.Response) => void): void
}
const app: App = null! // 1.
// END

// Don't do this: A.
app.get('/health', (request: express.Request, response: express.Response) => {
  response.send('OK')
})

// Do this: B.
app.get('/health', (request, response) => {
  response.send('OK')
})

// 1번 app에 App 인터페이스를 지정했기 때문에 B번처럼 매개변수들의 타입지정을 하지 않아도됨.

export default {}
