import $api from "../http";

export default class FilesService {
    static async uploadFiles(formData, campaignId) {
        return $api.post(`files/uploadFile/${campaignId}`, formData)
    }

    static async uploadAvatar(formData) {
        return $api.post('files/uploadAvatar', formData)
    }
}