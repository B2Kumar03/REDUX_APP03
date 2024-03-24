import { legacy_createStore } from "redux";
import rootReducer, { initialState } from "./reducer";
export const store=legacy_createStore(rootReducer)