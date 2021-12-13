import $api from "../http";

export default class GroupService {
    static async getAllGroup(campaignId) {
        return $api.get(`/group/${campaignId}`)
    }

    static async createGroup(campaignId, groupName) {
        return $api.post(`/group/${campaignId}`, { groupName })
    }

    static async renameGroup(groupId, groupName) {
        return $api.put(`/group/${groupId}`, { groupName })
    }

    static async deleteGroup(groupId) {
        return $api.delete(`/group/${groupId}`)
    }

}