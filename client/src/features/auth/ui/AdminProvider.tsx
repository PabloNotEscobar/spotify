'use client' // Обязательно

import { useEffect, useState } from "react";
import { AuthApi } from "@/features/auth";
import {useRouter} from "next/navigation";
import {useUserStore} from "@/entities/user/model/user-store";
import {SpotifyIcon} from "@/shared/ui";

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter()
    const setUser = useUserStore(state => state.setUser)


    useEffect(() => {
        const initAuth = async () => {
            try {
                const data = await AuthApi.refresh();
                if (data.user.role !== 'admin') {
                    throw new Error('Not allowed')
                }
                setLoaded(true);
            } catch (e) {
                setUser(null)
                router.push('sign-in')
            }
        };

        initAuth();
    }, []);

    if (loaded)
        return <>
            {children}
        </>;

    return <div className={'flex items-center justify-center h-screen'}>
        <SpotifyIcon />
    </div>;;
};
