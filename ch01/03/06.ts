function asNumber(val: number | string): number {
  return typeof val === 'string' ? Number(val) : val
  // 문자형이면 강제로 숫자형으로 타입변경
}

export default {}
