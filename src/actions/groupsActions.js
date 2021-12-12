import GroupService from "../services/GroupService"
import { ADD_GROUP, GROUPS_HIDE_LOADER, GROUPS_LOADED, GROUPS_MODAL_HIDE_LOADER, GROUPS_MODAL_SHOW_LOADER, GROUPS_SHOW_LOADER, RENAME_GROUP, SHOW_LOADER } from "../utils/constTypes"

export function getAll(campaignId) {
    return async dispatch => {
        try {
            dispatch({
                type: GROUPS_SHOW_LOADER
            })
            const { data } = await GroupService.getAll(campaignId)
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

export function create(campaignId, groupName) {
    return async dispatch => {
        try {
            dispatch({
                type: GROUPS_MODAL_SHOW_LOADER
            })
            const { data } = await GroupService.create(campaignId, groupName)
            dispatch({
                type: ADD_GROUP,
                payload: data
            })
            dispatch({
                type: GROUPS_MODAL_HIDE_LOADER
            })
            return Promise.resolve()
        } catch (e) {

        }
    }
}

export function renameGroup(groupId, groupName) {
    return async dispatch => {
        try {
            const { data } = await GroupService.rename(groupId, groupName)
            return Promise.resolve()
        } catch (e) {

        }
    }
}

export function deleteGroup(groupId) {
    return async dispatch => {
        try {
            const { data } = await GroupService.delete(groupId)
            return Promise.resolve(data)
        } catch (e) {

        }
    }
}