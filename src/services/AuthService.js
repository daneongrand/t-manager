import $api from "../http";

export default class AuthService {

    static async login(login, password) {
        return $api.post('user/login', {login, password})
    }

    static async signup(formData) {
        return $api.post('user/signup', {formData})
    }

    static async logout() {
        return $api.post('user/logout')
    }

    static async refresh() {
        return $api.get('user/refresh')
    }

}