import { applyMiddleware, combineReducers, createStore } from "redux";
import thunk from "redux-thunk";
import { postReducer } from "./postReducer";

const rootReducer = combineReducers({
  posts: postReducer
});

export const store = createStore(rootReducer, applyMiddleware(thunk));
