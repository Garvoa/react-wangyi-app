import { createStore, applyMiddleware } from "redux"
import { composeWithDevTools } from "redux-devtools-extension"
import thunk from "redux-thunk"
import reduce from "../reduces"
export default createStore(reduce, composeWithDevTools(applyMiddleware(thunk)))