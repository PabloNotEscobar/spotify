import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import {UserState, UserStore} from "@/entities/user/model/types";
import {ITrack} from "@/entities/track";

export const defaultInitState: UserState = {
    email: '',
    id: null,
    isAuth: false,
    role: '',
    favoriteTracks: []
};

export const useUserStore = create<UserStore>()(
    devtools(
        (set) => ({
            ...defaultInitState,

            setIsAuth: () => set({isAuth: true}),
            setIsNotAuth: () => set({isAuth: false}),
            setUser: (user: UserState | null) => set({id: user?.id, email: user?.email, isAuth: true, role: user?.role, favoriteTracks: user?.favoriteTracks}),
            addToFavoriteTracks: (track: number) => set((state) => ({favoriteTracks: [...state.favoriteTracks, track]})),
            setFavoriteTracks: (tracks: number[]) => set({favoriteTracks: [...tracks]}),
            excludeFromFavoriteTracks: (track: number) => set((state) => ({favoriteTracks: [...state.favoriteTracks.filter(t => t !==track)]}))
        }),
        {
            name: 'User Store', // Имя в DevTools
            store: 'user',    // опционально
        }
    )
);