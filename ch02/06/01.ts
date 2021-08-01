function getElement(elOrId: string | HTMLElement | null): HTMLElement | null{
  // typeof null은 ojbect여서 
  if (typeof elOrId === 'object') {
    return elOrId // htmlElement를 넘기려고 했는데 Null이 Ojbect타입이어서...HTMLElement | null 가 들어옴
    // ~~~~~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
  } else if (elOrId === null) {
    return document.body // null 체크 하고 null이면 document.body 반환.
  } else {
    // 그래서 null 체크 하고, null도 아니고 elOrId에 string만 남음.
    const el = document.getElementById(elOrId)
    return el // 반환타입에 HTMLElement | null로 하면 에러가 사라짐.
    // ~~~~~~~~~~ 'HTMLElement | null' is not assignable to 'HTMLElement'
  }
}

// export default {}

function add(a:number, b: number) : number{
  return a + b
}
// add(1,'3')
add(1, 20)

function logMessage(msg:string | null) {
  if (msg) {
    msg
  }
}

// tuple
// const arr: [string, number] = [10, '10'] // number형식은 String에 대입할 수 없다.
const arr: [string, number] = ['10', 10]
