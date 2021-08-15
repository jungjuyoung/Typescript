const el = document.getElementById('foo') // Type is HTMLElement | null
if (el) { // ㅇㅣ부분을 통과하ㄴ HTMLElement이기 때문에 
  el // Type is HTMLElement
  el.innerHTML = 'Party Time'.blink()
} else { // 이 부분을 통과하면 null
  el // Type is null
  alert('No element #foo')
}

export default {}
