import { SAVE_HOME_DATA } from "../action_types"
import { reqHome } from "../../api"
export const createSaveHomeAction = (categoryList) => ({ type: SAVE_HOME_DATA, data: categoryList })
export const createSaveHomeAsyncAction = () => {
  return async (dispatch) => {
    const result = await reqHome()
    const { data, code, msg } = result.data
    if (code === 200) {
      dispatch(createSaveHomeAction(data))
    } else {
      alert(msg)
    }
  }
}
