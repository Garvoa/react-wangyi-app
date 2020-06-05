import { SAVE_HOME_DATA } from "../action_types"

export default function (preState = {}, action) {
  const { type, data } = action
  let newState
  switch (type) {
    case SAVE_HOME_DATA:
      newState = { ...data }
      return newState
    default:
      return preState
  }
}