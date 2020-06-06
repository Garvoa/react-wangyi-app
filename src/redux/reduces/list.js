import { SAVE_LIST_DATA } from "../action_types"

export default function (preState = [], action) {
  const { type, data } = action
  let newState
  switch (type) {
    case SAVE_LIST_DATA:
      console.log(data)
      newState = { ...data }

      return newState
    default:
      return preState
  }
}