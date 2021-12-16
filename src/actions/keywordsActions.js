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



export function moveIntoGroup (source, destination) {
    return async dispatch => {
        try {

        } catch (e) {

        }
    }
}


export function createKeyword(campaignId, groupId, keyword, ams = 'н/д', competition = 'н/д', lowRange = 'н/д', highRange = 'н/д', currency = 'RUB') {
    return async dispatch => {
        try {
            const { data } = await KeywordsService.createKeyword(campaignId, groupId, keyword, ams, competition, lowRange, highRange, currency)
            return Promise.resolve(data)
        } catch(e) {

        }
    }
}


export function editKeyword(keywordId, groupId, isMinusPhrase) {
    return async dispatch => {
        try {
            const { data } = await KeywordsService.editKeyword(keywordId, groupId, isMinusPhrase)
            return Promise.resolve(data)
        } catch (e) {

        }
    }
}


export function deleteKeyword(keywordId) {
    return async dispatch => {
        try {
            const { data } = await KeywordsService.deleteKeyword(keywordId)
            return Promise.resolve()
        } catch (e) {

        }
    }
}