import KeywordsService from "../services/KeywordsService"
import { KEYWORDS_HIDE_LOADER, KEYWORDS_LOADED, KEYWORDS_SHOW_LOADER } from "../utils/constTypes"

export function getAllKeywords(campaignId) {
    return async dispatch => {
        try {
            dispatch({
                type: KEYWORDS_SHOW_LOADER
            })
            const { data } = await KeywordsService.getAllKeywords(campaignId, 'null')
            dispatch({
                type: KEYWORDS_LOADED,
                payload: data
            })
            dispatch({
                type: KEYWORDS_HIDE_LOADER
            })
        } catch(e) {

        }

    }
}