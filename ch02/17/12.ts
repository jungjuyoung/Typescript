let obj: { readonly [k: string]: number } = {}
// Or Readonly<{[k: string]: number}
obj.hi = 45
//  ~~ Index signature in type ... only permits reading
// 인덱스 시그니처는 읽기만 허용
obj = { ...obj, hi: 12 } // OK
obj = { ...obj, bye: 34 } // OK

export default {}
