import MinusPhrasesService from "../services/MinusPhrasesService"
import { MINUS_PHRASES_HIDE_LOADER, MINUS_PHRASES_LOADED, MINUS_PHRASES_SHOW_LOADER } from "../utils/constTypes"

export function getAllMinusPhrases(campaignId) {
    return async dispatch => {
        try {
            dispatch({
                type: MINUS_PHRASES_SHOW_LOADER
            })
            const { data } = await MinusPhrasesService.getAllMinusPhrases(campaignId)
            dispatch({
                type: MINUS_PHRASES_LOADED,
                payload: data
            })
            dispatch({
                type: MINUS_PHRASES_HIDE_LOADER
            })
        } catch(e) {

        }
    }
}