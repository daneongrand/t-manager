import { combineReducers } from "redux";
import { constructorReducer } from "./constructorReducer";
import { dndReducer } from "./dndReducer";
import { modalReducer } from "./modalReducer";

export const rootReducer = combineReducers({
    constructors: constructorReducer,
    dnd: dndReducer,
    modal: modalReducer
})