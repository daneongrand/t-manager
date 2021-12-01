import $api from "../http";

export default class AuthService {

    static async login(login, password) {
        return $api.post('user/login', {login, password})
    }

    static async signup(firstName, lastName, nickName, email, password) {
        return $api.post('user/signup', {firstName, lastName, nickName, email, password})
    }

    static async logout() {
        return $api.post('user/logout')
    }

}