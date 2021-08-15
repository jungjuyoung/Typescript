interface UploadEvent {
  type: 'upload'
  filename: string
  contents: string
}
interface DownloadEvent {
  type: 'download'
  filename: string
}
type AppEvent = UploadEvent | DownloadEvent

function handleEvent(e: AppEvent) {
  switch (e.type) { // e.type으로 타입을 좁혀서 
    case 'download': // e.type이 download이면 
    e // Type is DownloadEvent 
    console.log('filename' in e);
    break
    case 'upload': // e.type이 upload이면
    e // Type is UploadEvent
    console.log('contents' in e);
    break
  }
}
handleEvent({type: 'upload', filename: 'png', contents: 'photo'})

// export default {}
