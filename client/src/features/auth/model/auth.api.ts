import $api from "@/shared/api/axios";
import {IAuthResponse} from "@/features/auth";
import axios from "axios";

export class AuthApi {
    static async login (email: string, password: string): Promise<IAuthResponse> {
        const { data } = await $api.post<IAuthResponse>(
            `/auth/sign-in`,
            { email, password },
            {withCredentials: true}
        );
        console.log(data)
        localStorage.setItem('token', data.accessToken)
        return data;
    }


    static async registration (email: string, password: string, username: string): Promise<void> {
        await $api.post<void>(
            `/auth/sign-up`,
            { email, password, name: username }
        );
        return;
    }


    static async refresh (): Promise<IAuthResponse> {
        const { data } = await $api.get<IAuthResponse>(
            `/auth/refresh-token`
        );
        localStorage.setItem('token', data.accessToken)
        return data;

    }


    static async refreshProxy (): Promise<IAuthResponse> {
        const { data } = await $api.get<IAuthResponse>(
            `/api/auth/refresh`
        );
        localStorage.setItem('token', data.accessToken)
        return data;

    }


    static async logout (){
        localStorage.removeItem('token')
        await $api.delete(`/auth/logout`, {withCredentials: true})
        return
    }


}