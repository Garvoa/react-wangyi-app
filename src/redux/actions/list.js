import { SAVE_LIST_DATA } from "../action_types"
export const createSaveListAsyncAction = (list) => ({ type: SAVE_LIST_DATA, data: list })