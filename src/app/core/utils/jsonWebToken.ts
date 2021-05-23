import { LocalStorage } from './localStorage';

export class JsonWebToken {

    /**
       * get token
       */
    static getToken() {
        return LocalStorage.getItem('token');
    }

    /**
     * get refresh token
     */
    static getRefreshToken() {
        return LocalStorage.getItem('refresh-token');
    }

    /**
     * set token
     * @param token
     */
    static setToken(token: string) {
        LocalStorage.setItem('token', token);
    }

    /**
     * set refresh token
     * @param refreshToken
     */
    static setRefreshToken(refreshToken: string) {
        LocalStorage.setItem('refresh-token', refreshToken);
    }

    /**
     * set token & refreshtoken
     * @param token
     * @param refreshToken
     */
    static setCredentials(token: string, refreshToken: string) {
        JsonWebToken.setToken(token);
        JsonWebToken.setRefreshToken(refreshToken);
    }

    /**
     * destroy token & refresh token
     */
    static destroyToken() {
        LocalStorage.removeItem('token');
        LocalStorage.removeItem('refresh-token');
    }
}