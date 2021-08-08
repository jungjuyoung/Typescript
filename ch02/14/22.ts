const INIT_OPTIONS = {
  width: 640,
  height: 480,
  color: '#00FF00',
  label: 'VGA',
}
function getUserInfo(userId: string) {
  // COMPRESS
  const name = 'Bob'
  const age = 12
  const height = 48
  const weight = 70
  const favoriteColor = 'blue'
  // END
  return {
    userId,
    name,
    age,
    height,
    weight,
    favoriteColor,
  }
}
// Return type inferred as { userId: string; name: string; age: number, ... }

// 함수의 리턴값의 타입을 정의하고 싶을때
type UserInfo = ReturnType<typeof getUserInfo>

export default {}
