import GroupService from "../services/GroupService"
import { SHOW_LOADER } from "../utils/constTypes"

export function getAll(campaignId) {
    return async dispatch => {
        try {
            dispatch({
                type: SHOW_LOADER
            })
            const { data } = await GroupService.getAll(campaignId)
            
        } catch (e) {

        }
    }
}