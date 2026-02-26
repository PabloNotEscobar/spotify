'use client' // Обязательно

import { useEffect, useState } from "react";
import { AuthApi } from "@/features/auth";
import {useRouter} from "next/navigation";
import {useUserStore} from "@/entities/user/model/user-store";
import {SpotifyIcon} from "@/shared/ui/navbar";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter()
    const setUser = useUserStore(state => state.setUser)
    const user = useUserStore(state => state.id)


    useEffect(() => {
        const initAuth = async () => {
            try {
                const data = await AuthApi.refresh();
                setUser(data.user)
                setLoaded(true);
            } catch (e) {
                setUser(null)
                router.replace('/sign-in');
                console.log(e)
            }
        };

        initAuth();
    }, []);

    if (loaded)
        return children


    return <div className={'flex items-center justify-center h-screen'}>
        <SpotifyIcon />
    </div>;
};