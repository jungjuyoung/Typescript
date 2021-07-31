interface PostgresDB {
  runQuery: (sql: string) => any[]
}
interface Author {
  first: string
  last: string
}
interface DB {
  runQuery: (sql: string) => any[]
}
function getAuthors(database: DB): Author[] {
  // database는 runQuery라는 메소드를 갖은 객체가 와야하고, 
  // 리턴값은 first: string, last: string가 있는 객체들의 배열, 그러니까 배열의 요소들이 {
  // first: string, last: string} 이여야 함
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`)
  return authorRows.map(row => ({ first: row[0], last: row[1] }))
}

export default {}
