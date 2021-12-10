import $api from "../http";

export default class FilesService {
    static async uploadFiles(formData) {
        return $api.post('files/uploadFile', formData)
    }
}