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

export function createMinusPhrase(campaignId, keyword, ams = 'н/д', competition = 'н/д', lowRange = 'н/д', highRange = 'н/д', currency = 'RUB') {
    return async dispatch => {
        try {
            const { data } = await MinusPhrasesService.createMinusPhrases(campaignId, keyword, ams, competition, lowRange, highRange, currency)
            return Promise.resolve(data)
        } catch(e) {

        }
    }
}