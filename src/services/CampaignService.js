import $api from '../http'

export default class CampaignService {
    
    static async getAll() {
        return $api.get('campaign/')
    }

    static async rename(campaignId, campaignName) {
        return $api.put(`campaign/${campaignId}`, {campaignName})
    }

    static async create(campaignName) {
        return $api.post(`campaign/`, {campaignName})
    }

    static async delete(campaignId) {
        return $api.delete(`campaign/${campaignId}`)
    }

}