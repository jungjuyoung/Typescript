interface Cylinder {
  radius: number
  height: number
}

const Cylinder = (radius: number, height: number) => ({ radius, height })
const Cylinder2 = (radius: number, height: number):Cylinder => ({ radius, height })
// Cylinder이름이 똑같아서 헷갈림.

export default {}
