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
  // 테스트를 위한 모킹 작업을 위해서 DB를 생성하고 DB를 추상화로 사용함.
  const authorRows = database.runQuery(`SELECT FIRST, LAST FROM AUTHORS`)
  return authorRows.map(row => ({ first: row[0], last: row[1] }))
}
test('getAuthors', () => {
  const authors = getAuthors({
    runQuery(sql: string) {
      return [
        ['Toni', 'Morrison'],
        ['Maya', 'Angelou'],
      ]
    },
  })
  expect(authors).toEqual([
    { first: 'Toni', last: 'Morrison' },
    { first: 'Maya', last: 'Angelou' },
  ])
})

export default {}
