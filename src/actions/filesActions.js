import FilesService from "../services/FilesService"
import { ADD_KEYWORDS, HIDE_LOADER, SHOW_LOADER, TOGGLE_MODAL_ADD_KEYWORDS, UPLOAD_FILES_ERROR } from "../utils/constTypes"

export function uploadFile(dataForm) {
    return async dispatch => {
        try {
            dispatch({
                type: SHOW_LOADER
            })
            const { data } = await FilesService.uploadFiles(dataForm)
            const { keywords } = data
            dispatch({
                type: ADD_KEYWORDS,
                payload: keywords
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