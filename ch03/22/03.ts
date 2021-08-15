function contains(text: string, search: string | RegExp) {
  if (search instanceof RegExp) {
    search // Type is RegExp
    // return !!search.exec(text)
    return console.log(!!search.exec(text));
    
  }
  search // Type is string
  return console.log(text.includes(search));
  
}
contains('이런 글자가 있니?',/있니?/g)
// export default {}
