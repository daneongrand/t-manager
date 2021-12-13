import $api from "../http"

export default class MinusPhrasesService {

    static async getAllMinusPhrases(campaignId) {
        return $api.get(`/minusPhrase/${campaignId}`)
    }

    static async createMinusPhrases(campaignId, keyword, ams, competition, lowRange, highRange, currency) {
        return $api.post(`/minusPhrase/${campaignId}`, {keyword, ams, competition, lowRange, highRange, currency})
    }

    static async deleteMinusPhrases(keywordId) {
        return $api.delete(`/minusPhrase/${keywordId}`)
    }

}