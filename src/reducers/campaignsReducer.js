import {
    CAMPAIGN_HIDE_LOADER,
    CAMPAIGN_SHOW_LOADER,
    CAMPAIGN_TOGGLE_ADDING,
    CAMPAIGN_TOGGLE_DELETING,
    CAMPAIGN_TOGGLE_RENAMING,
    CREATE_CAMPAIGN,
    DELETE_CAMPAIGN,
    GET_ALL_CAMPAIGNS, 
    HIDE_LOADER, 
    RENAME_CAMPAIGN, 
    SHOW_LOADER 
} from "../utils/constTypes"

const initialState = {
    isLoading: false,
    isRenaming: {
        id: null,
        isRenaming: false
    },
    isAdding: {
        id: null,
        isAdding: false
    },
    isDeleting: {
        id: null,
        isDeleting: false
    },
    campaigns: []
}

export const campaignsReducer = (state = initialState, action) => {
    switch (action.type) {

        case CAMPAIGN_TOGGLE_ADDING: {
            const { id } = action.payload
            return {
                ...state, 
                isAdding: {
                    id: id,
                    isAdding: !state.isAdding
                }
            }
        }

        case CAMPAIGN_TOGGLE_RENAMING: {
            console.log(action.payload)
            const { id } = action.payload
            return {
                ...state,
                isRenaming: {
                    id: id,
                    isRenaming: !state.isRenaming.isRenaming
                }
            }
        }

        case CAMPAIGN_TOGGLE_DELETING: {
            const { id } = action.payload
            return {
                ...state,
                isDeleting: {
                    id: id,
                    isDeleting: !state.isDeleting
                }
            }
        }

        case CAMPAIGN_SHOW_LOADER: {
            return {
                ...state,
                isLoading: true
            }
        }

        case CAMPAIGN_HIDE_LOADER: {
            return {
                ...state,
                isLoading: false
            }
        }

        case GET_ALL_CAMPAIGNS: {
            const campaigns = action.payload
            return {
                ...state,
                campaigns: [
                    ...campaigns
                ]
            }
        }

        case CREATE_CAMPAIGN: {
            const campaign = action.payload
            return {
                ...state,
                campaigns: [
                    campaign,
                    ...state.campaigns
                ]
            }
        }

        case DELETE_CAMPAIGN: {
            const deletedCampaignId = action.payload
            const campaigns = state.campaigns.filter(item => item.id !== +deletedCampaignId)
            return {
                ...state,
                campaigns: [
                    ...campaigns
                ]
            }
        }

        case RENAME_CAMPAIGN: {
            console.log(action.payload)
            return state
        }

        default: {
            return state
        }
    }
}