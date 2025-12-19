import { create } from "zustand";
import { devtools } from 'zustand/middleware';
import {UserState, UserStore} from "@/entities/user/model/types";

export const defaultInitState: UserState = {
    email: '',
    id: null,
    isAuth: false
};

export const useUserStore = create<UserStore>()(
    devtools(
        (set) => ({
            ...defaultInitState,

            setIsAuth: () => set({isAuth: true}),
            setIsNotAuth: () => set({isAuth: false}),
            setUser: (user: UserState | null) => set({id: user?.id, email: user?.email, isAuth: true})

        }),
        {
            name: 'User Store', // Имя в DevTools
            // store: 'player',    // опционально
        }
    )
);