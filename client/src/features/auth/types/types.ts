import {IUser} from "@/entities/user";

export interface IAuthResponse {
    accessToken: string
    user: IUser
}


