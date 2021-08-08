interface SaveAction {
  type: 'save'
  // ...
}
interface LoadAction {
  type: 'load'
  // ...
}
type Action = SaveAction | LoadAction
type ActionType = Action['type']
// 아래 1번을 간략하게 줄인것.
// 1. type ActionType = 'save' | 'load' // Repeated types!
// 2.번 
type ActionPick = Pick<Action,'type'>

export default {}
