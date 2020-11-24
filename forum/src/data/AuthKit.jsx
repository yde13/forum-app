const jwt = require('jsonwebtoken')
const ROOT_URL = "https://lab.willandskill.eu"
const USER_CREATE = `${ROOT_URL}/api/v1/auth/users/`
const USER_LOGIN_AUTH = `${ROOT_URL}/api/v1/auth/api-token-auth/`
const USER_ME = `${ROOT_URL}/api/v1/me/`
const COUNTRY = `${ROOT_URL}/api/v1/countries/`

export default class {

    login(email, password) {
        const payload = {
            email, password
        }
        return fetch(USER_LOGIN_AUTH, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    register(registerData) {
        const payload = {
            firstName: registerData.firstName,
            lastName: registerData.lastName,
            email: registerData.email,
            password: registerData.password,
            country: registerData.country,
        }
        return fetch(USER_CREATE, {
            method: 'POST',
            body: JSON.stringify(payload),
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    getMe() {
        return fetch(USER_ME, {
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${this.getToken()}`
            }
        })

    }

    getCountries() {
        return fetch(COUNTRY, {
            headers: {
                "Content-Type": "application/json"
            }
        })
    }

    setToken(token) {
        localStorage.setItem("JWT_APP", token)
    }

    getToken() {
        return localStorage.getItem("JWT_APP")
    }

    setUserInfo(userData) {
        localStorage.setItem("userData", JSON.stringify(userData))
    }

    logout() {
        localStorage.removeItem("JWT_APP")
        localStorage.removeItem("userData")
    }

    decodeToken() {
        let decoded = jwt.decode(this.getToken());

        if (decoded !== null) {
            if (Date.now() >= decoded.exp * 1000) {
                return false;
            } else {
                return true
            }
        } else {
            return false
        }
    }
}