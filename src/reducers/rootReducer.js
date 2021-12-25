import { combineReducers } from "redux";
import { campaignsReducer } from "./campaignsReducer";
import { constructorReducer } from "./constructorReducer";
import { dndReducer } from "./dndReducer";
import { filesReducer } from "./filesReducer";
import { groupsReducer } from "./groupsReducer";
import { userReducer } from "./userReducer";
import { keywordsReducer } from './keywordsReducer'
import { minusPhrasesReducer } from './minusPhrasesReducer'
import { historyPostReducer } from './historyPostReducer'
 
export const rootReducer = combineReducers({
    constructors: constructorReducer,
    dnd: dndReducer,
    user: userReducer,
    campaigns: campaignsReducer,
    files: filesReducer,
    groups: groupsReducer,
    keywords: keywordsReducer,
    minusPhrases: minusPhrasesReducer,
    historyPost: historyPostReducer
})