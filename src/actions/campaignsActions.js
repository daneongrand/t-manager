import CampaignService from "../services/CampaignService"
import { GET_ALL_CAMPAIGNS, HIDE_LOADER, RENAME_CAMPAIGN, SHOW_LOADER } from "../utils/constTypes"

export function getAll () {
    return async dispatch => {
        try {
            dispatch({
                type: SHOW_LOADER
            })
            const { data } = await CampaignService.getAll()
            const campaigns = data.campaigns
            setTimeout(() => {
                dispatch({
                    type: GET_ALL_CAMPAIGNS,
                    payload: campaigns
                })
                dispatch({
                    type: HIDE_LOADER
                })
            }, 5000)
            
        } catch (e) {
            return Promise.reject()
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

export function rename (campaignId, campaignName) {
    return async dispatch => {
        try {
            const { data } = await CampaignService.rename(campaignId, campaignName)
            dispatch({
                type: RENAME_CAMPAIGN,
                payload: data
            })
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