import HistoryPostService from "../services/HistoryPostService"
import { HISTORY_POST_HIDE_LOADER, HISTORY_POST_SHOW_LOADER, HISTORY_POST_LOADED, HISTORY_POST_SET_COUNT } from "../utils/constTypes"

export function getPostList (limit, page) {
    return async dispatch => {
        try {
            dispatch({
                type: HISTORY_POST_SHOW_LOADER
            })
            const { data } = await HistoryPostService.getPostList(limit, page)
            dispatch({
                type: HISTORY_POST_SET_COUNT,
                payload: data.count
            })
            dispatch({
                type: HISTORY_POST_LOADED,
                payload: data.rows
            })
            dispatch({
                type: HISTORY_POST_HIDE_LOADER,
            })
        } catch (e) {
            dispatch({
                type: HISTORY_POST_HIDE_LOADER,
            })
        }
    }
}

