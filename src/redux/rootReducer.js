import { combineReducers } from "redux";
import { constructorReducer } from "./constructorReducer";

export const rootReducer = combineReducers({
    constructors: constructorReducer
})