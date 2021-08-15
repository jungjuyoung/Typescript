// 아래와같이 코딩하면 01.ts에 있는 코드를 if문 없이 보다 간결하게 사용할 수 있다.
const el = document.getElementById('foo') // Type is HTMLElement | null
if (!el) throw new Error('Unable to find #foo') // 이 구문을 통과했으니 아래 el은 당연히 HTMLElement
el // Now type is HTMLElement 이제 타입유형은 HTMLElement입니다.
el.innerHTML = 'Party Time'.blink()

export default {}

/*
// 01.ts
// const el = document.getElementById('foo') // Type is HTMLElement | null
// if (el) { // ㅇㅣ부분을 통과하ㄴ HTMLElement이기 때문에 
//   el // Type is HTMLElement
//   el.innerHTML = 'Party Time'.blink()
// } else { // 이 부분을 통과하면 null
//   el // Type is null
//   alert('No element #foo')
// }

// export default {}
*/

