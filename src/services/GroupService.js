import $api from "../http";

export default class GroupService {
    static async getAll(campaignId) {
        return $api.get(`/group/${campaignId}`)
    }
}