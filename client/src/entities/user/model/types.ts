import {IUser} from "@/entities/user";
import {ITrack} from "@/entities/track";

export interface UserState {
    id: number | null
    email: string
    role: string
    isAuth: boolean
    favoriteTracks: number[]
}

interface UserActions {
    setIsAuth: () => void
    setIsNotAuth: () => void
    setUser: (user: IUser | null) => void
    setRole: () => void
    addToFavoriteTracks: (track: number) => void
    excludeFromFavoriteTracks: (track: number) => void
    setFavoriteTracks:  (tracks: number[]) => void
}


export interface UserStore extends UserState, UserActions {}

