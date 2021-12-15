import $api from "../http"

export default class MinusPhrasesService {

    static async getAllMinusPhrases(campaignId) {
        return $api.get(`keyword/minusPhrase/${campaignId}`)
    }

    static async createMinusPhrases(campaignId, keyword, ams, competition, lowRange, highRange, currency) {
        return $api.post(`keyword/minusPhrase/${campaignId}`, {keyword, ams, competition, lowRange, highRange, currency})
    }

    static async deleteMinusPhrases(keywordId) {
        return $api.delete(`keyword/minusPhrase/${keywordId}`)
    }

}