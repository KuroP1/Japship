import api from "./api";
import TokenService from "./token.service";

class AuthService {
    login(username, password) {
        return api
            .post("/auth/signin", {
                username,
                password
            })
            .then(response => {
                if (response.data.accessToken) {
                    TokenService.setUser(response.data);
                }

                return response.data;
            });
    }

    logout() {
        TokenService.removeUser();
    }
    checkLogin() {
        const user = this.getCurrentUser();
        return user !== null;
    }

    register(username, email, password) {
        return api.post("/auth/signup", {
            username,
            email,
            password,
            access: ["G7Japtify-M"]
        });
    }

    getCurrentUser() {
        return TokenService.getUser();
    }
}

export default new AuthService();