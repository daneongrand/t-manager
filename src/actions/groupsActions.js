import GroupService from "../services/GroupService"
import { ADD_GROUP, GROUPS_HIDE_LOADER, GROUPS_LOADED, GROUPS_MODAL_HIDE_LOADER, GROUPS_MODAL_SHOW_LOADER, GROUPS_SHOW_LOADER, RENAME_GROUP, SHOW_LOADER } from "../utils/constTypes"

export function getAllGroup(campaignId) {
    return async dispatch => {
        try {
            dispatch({
                type: GROUPS_SHOW_LOADER
            })
            const { data } = await GroupService.getAllGroup(campaignId)
            dispatch({
                type: GROUPS_LOADED,
                payload: data
            })
            dispatch({
                type: GROUPS_HIDE_LOADER
            })
        } catch (e) {

        }
    }

}

export function createGroup(campaignId, groupName) {
    return async dispatch => {
        try {
            dispatch({
                type: GROUPS_MODAL_SHOW_LOADER
            })
            const { data } = await GroupService.createGroup(campaignId, groupName)
            dispatch({
                type: GROUPS_MODAL_HIDE_LOADER
            })
            return Promise.resolve(data)
        } catch (e) {

        }
    }
}

export function renameGroup(groupId, groupName) {
    return async dispatch => {
        try {
            const { data } = await GroupService.renameGroup(groupId, groupName)
            return Promise.resolve()
        } catch (e) {

        }
    }
}

export function deleteGroup(groupId) {
    return async dispatch => {
        try {
            const { data } = await GroupService.deleteGroup(groupId)
            return Promise.resolve(data)
        } catch (e) {

        }
    }
}