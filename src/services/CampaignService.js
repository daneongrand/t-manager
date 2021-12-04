import $api from '../http'

export default class CampaignService {
    
    static async getAll() {
        return $api.get('campaign/')
    }

}