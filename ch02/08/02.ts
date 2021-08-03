interface Cylinder {
  radius: number
  height: number
}

const Cylinder = (radius: number, height: number) => ({ radius, height })
function calculateVolume(shape: unknown) {
  if (shape instanceof Cylinder) { // instanceof 뒤에는 값이 와야함. 함수Cylinder를 참조함 
    shape.radius
    // ~~~~~~ Property 'radius' does not exist on type '{}'
  }
}

export default {}
