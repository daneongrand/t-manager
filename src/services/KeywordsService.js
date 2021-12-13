import $api from "../http";

export default class KeywordsService {

    static async getAllKeywords(campaignId, groupId) {
        return $api.get(`/keyword/${campaignId}&${groupId}`)
    }

    static async createKeyword(campaignId, groupId, keyword, ams, competition, lowRange, highRange, currency) {
        return $api.post(`/keyword/${campaignId}&${groupId}`, {keyword, ams, competition, lowRange, highRange, currency})
    }

    static async deleteKeyword(keywordId) {
        return $api.delete(`/keyword/${keywordId}`)
    }

}