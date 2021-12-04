import { combineReducers } from "redux";
import { constructorReducer } from "./constructorReducer";
import { dndReducer } from "./dndReducer";
import { userReducer } from "./userReducer";


export const rootReducer = combineReducers({
    constructors: constructorReducer,
    dnd: dndReducer,
    user: userReducer
})