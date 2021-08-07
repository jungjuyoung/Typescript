function isGreeting(phrase: String) {
  return ['hello', 'good day'].includes(phrase)
  // ~~~~~~
  // Argument of type 'String' is not assignable to parameter
  // of type 'string'.
  // 'string' is a primitive, but 'String' is a wrapper object;
  // prefer using 'string' when possible
  // 아하, String은 string을 감싼 wrapper object라서 통과됐던거임, 가능하면 string 사용하는것을 선호. 고로 'string' => String은 통과, String => string은 불통.
  
}

export default {}
