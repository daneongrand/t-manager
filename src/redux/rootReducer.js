import { combineReducers } from "redux";
import { constructorReducer } from "./constructorReducer";
import { dndReducer } from "./dndReducer";

export const rootReducer = combineReducers({
    constructors: constructorReducer,
    dnd: dndReducer,
})