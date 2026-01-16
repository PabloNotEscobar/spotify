import $api, {API_URL, API_URL_CLIENT} from "@/shared/api/axios";
import {IAuthResponse} from "@/features/auth";
import axios from "axios";

export class AuthApi {
    static async login (email: string, password: string): Promise<IAuthResponse> {
        const { data } = await axios.post<IAuthResponse>(
            `http://localhost:4000/auth/sign-in`,
            { email, password },
            {withCredentials: true}
        );
        localStorage.setItem('token', data.accessToken)
        return data;
    }


    static async registration (email: string, password: string, username: string): Promise<void> {
        await axios.post<void>(
            `${API_URL}/auth/sign-up`,
            { email, password, name: username }
        );
        return;
    }


    static async refresh (): Promise<IAuthResponse> {
        const { data } = await $api.get<IAuthResponse>(
            `${API_URL}/auth/refresh-token`
        );
        localStorage.setItem('token', data.accessToken)
        return data;

    }


    static async logout (){
        localStorage.removeItem('token')
        await axios.delete(`${API_URL}/auth/logout`, {withCredentials: true})
        return
    }


}