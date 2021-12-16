import $api from "../http";

export default class FilesService {
    static async uploadFiles(formData, campaignId) {
        return $api.post(`files/uploadFile/${campaignId}`, formData)
    }
}