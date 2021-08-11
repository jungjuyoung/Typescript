const str = `Lorem Ipsum is simply dummy text of
the printing and typesetting industry.

Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,

It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged.`

function parseTaggedText(lines: string[]): string[][] {
  const paragraphs: string[][] = []
  let currPara:readonly string[] = []

  const addParagraph = () => {
    if (currPara.length) {
      // paragraphs.push([...currPara]) // [[Lorem Ipsum...],[the printing...]] 1. 펼치기로 하는것보다 currPara에 readonly로 하면 좋음.
      paragraphs.push(currPara as string[]) // [[Lorem Ipsum...],[the printing...]]
      currPara = [] // Clear the lines [[],[]] 여기서 자꾸 배열이 삭제돼버림
    }
  }

  for (const line of lines) {
    if (!line) {
      addParagraph()
    } else {
      currPara = currPara.concat(line)
    }
  }
  addParagraph()
  return paragraphs
}
console.log(parseTaggedText(str.split('\n')))

// export default {}
