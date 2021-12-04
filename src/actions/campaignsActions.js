import CampaignService from "../services/CampaignService"
import { GET_ALL_CAMPAIGNS, HIDE_LOADER, SHOW_LOADER } from "../utils/constTypes"

export function getAll () {
    return async dispatch => {
        try {
            const { data } = await CampaignService.getAll()
            dispatch({
                type: GET_ALL_CAMPAIGNS,
                payload: data
            })
            return Promise.resolve()
        } catch (e) {

        }
    }
}

export function getOne () {
    return async dispatch => {
        try {

        } catch (e) {
            
        }
    }
}

export function create () {
    return async dispatch => {
        try {

        } catch (e) {
            
        }
    }
}

export function rename () {
    return async dispatch => {
        try {

        } catch (e) {
            
        }
    }
}

export function showLoader () {
    return {
        type: SHOW_LOADER
    }
}

export function hideLoader () {
    return {
        type: HIDE_LOADER
    }
}