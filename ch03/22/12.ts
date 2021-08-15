const jackson5 = ['Jackie', 'Tito', 'Jermaine', 'Marlon', 'Michael']
function isDefined<T>(x: T | undefined): x is T {
  console.log(x !== undefined);  
  return x !== undefined
}
const members = ['Janet', 'Michael'].map(who => jackson5.find(n => n === who)).filter(isDefined) // Type is string[]

export default {}
