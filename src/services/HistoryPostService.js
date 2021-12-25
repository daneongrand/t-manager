import $api from "../http";

export default class HistoryPostService {
    static async getPostList(limit, page) {
        return $api.get(`/historyPost/?limit=${limit}&page=${page}`)
    }
}