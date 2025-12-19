import $api, {API_URL} from "@/shared/api/axios";
import {IAuthResponse} from "@/features/auth";
import axios from "axios";

export class AuthApi {
    static async login (email: string, password: string): Promise<IAuthResponse> {
        const { data } = await $api.post<IAuthResponse>(
            '/auth/sign-in',
            { email, password }
        );
        localStorage.setItem('token', data.accessToken)
        return data;
    }


    static async registration (email: string, password: string): Promise<void> {
        await $api.post<void>(
            '/auth/sign-up',
            { email, password }
        );
        return;
    }


    static async refresh (): Promise<IAuthResponse> {
        const { data } = await axios.post<IAuthResponse>(
            `${API_URL}/auth/refresh-token`,
            {},
            {withCredentials: true}
        );
        localStorage.setItem('token', data.accessToken)
        return data;

    }



    static async logout (): Promise<unknown> {
        return $api.post('/logout')
    }

}