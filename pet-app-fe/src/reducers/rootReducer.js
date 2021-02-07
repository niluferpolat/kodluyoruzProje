import { combineReducers } from "redux";
import postReducer from "./post";
import adoptReducer from "./adopt"
const rootReducer = combineReducers({ posts: postReducer, adopts: adoptReducer });

export default rootReducer;