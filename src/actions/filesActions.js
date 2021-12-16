import FilesService from "../services/FilesService"
import { ADD_KEYWORDS, HIDE_LOADER, KEYWORDS_LOADED, SHOW_LOADER, TOGGLE_MODAL_ADD_KEYWORDS, UPLOAD_FILES_ERROR } from "../utils/constTypes"

export function uploadFile(dataForm, campaignId) {
    return async dispatch => {
        try {
            dispatch({
                type: SHOW_LOADER
            })
            const { data } = await FilesService.uploadFiles(dataForm, campaignId)
            dispatch({
                type: KEYWORDS_LOADED,
                payload: data
            })
            dispatch({
                type: HIDE_LOADER
            })
            dispatch({
                type: TOGGLE_MODAL_ADD_KEYWORDS
            })
        } catch (e) {
            dispatch({
                type: HIDE_LOADER
            })
            dispatch({
                type: UPLOAD_FILES_ERROR,
                payload: e.message
            })
        }
    }
}