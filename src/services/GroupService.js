import $api from "../http";

export default class GroupService {
    static async getAll(campaignId) {
        return $api.get(`/group/${campaignId}`)
    }

    static async create(campaignId, groupName) {
        return $api.post(`/group/${campaignId}`, { groupName })
    }

    static async rename(groupId, groupName) {
        return $api.put(`/group/${groupId}`, { groupName })
    }

    static async delete(groupId) {
        return $api.delete(`/group/${groupId}`)
    }

}