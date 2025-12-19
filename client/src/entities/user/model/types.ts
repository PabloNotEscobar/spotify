import {IUser} from "@/entities/user";

export interface UserState {
    id: number | null
    email: string
    isAuth: boolean
}

interface UserActions {
    setIsAuth: () => void
    setIsNotAuth: () => void
    setUser: (user: IUser | null) => void
}


export interface UserStore extends UserState, UserActions {}

