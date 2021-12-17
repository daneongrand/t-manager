import CampaignService from "../services/CampaignService"
import { CAMPAIGN_HIDE_LOADER, CAMPAIGN_SHOW_LOADER, CAMPAIGN_TOGGLE_RENAMING, CREATE_CAMPAIGN, DELETE_CAMPAIGN, GET_ALL_CAMPAIGNS, HIDE_LOADER, RENAME_CAMPAIGN, SHOW_LOADER } from "../utils/constTypes"

export function getAll () {
    return async dispatch => {
        try {
            dispatch({
                type: CAMPAIGN_SHOW_LOADER
            })
            const { data } = await CampaignService.getAll()
            const campaigns = data.campaigns
            dispatch({
                type: GET_ALL_CAMPAIGNS,
                payload: campaigns
            })
            dispatch({
                type: CAMPAIGN_HIDE_LOADER
            })
        } catch (e) {
            dispatch({
                type: CAMPAIGN_HIDE_LOADER
            })
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

export function create (campaignName) {
    return async dispatch => {
        try {
            const { data } = await CampaignService.create(campaignName)
            const { campaign } = data
            dispatch({
                type: CREATE_CAMPAIGN,
                payload: campaign
            })
        } catch (e) {
            
        }
    }
}

export function rename (campaignId, campaignName) {
    return async dispatch => {
        try {
            dispatch({
                type: CAMPAIGN_TOGGLE_RENAMING,
                payload: {
                    id: campaignId
                }
            })
            const { data } = await CampaignService.rename(campaignId, campaignName)
            dispatch({
                type: RENAME_CAMPAIGN,
                payload: data
            })
            dispatch({
                type: CAMPAIGN_TOGGLE_RENAMING,
                payload: {
                    id: null
                }
            })
            return Promise.resolve()
        } catch (e) {
            
        }
    }
}

export function deleteCampaign (campaignId) {
    return async dispatch => {
        try {
            const { data } = await CampaignService.delete(campaignId)
            const { deletedCampaignId } = data
            dispatch({
                type: DELETE_CAMPAIGN,
                payload: deletedCampaignId
            })
        } catch (e) {

        }
    }
}

export function getOneCampaign (campaignId) {
    return async dispatch => {
        try {
            const { data } = await CampaignService.getOne(campaignId)
            return Promise.resolve(data)
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