'use client' // Обязательно

import { useEffect, useState } from "react";
import { AuthApi } from "@/features/auth";
import {useRouter} from "next/navigation";
import {useUserStore} from "@/entities/user/model/user-store";

export const AdminProvider = ({ children }: { children: React.ReactNode }) => {
    const [loaded, setLoaded] = useState(false);
    const router = useRouter()
    const setUser = useUserStore(state => state.setUser)
    const user = useUserStore(state => state.id)


    useEffect(() => {
        const initAuth = async () => {
            try {
                const data = await AuthApi.refresh();
                if (data.user.role !== 'admin') {
                    throw new Error('Not allowed')
                }
            } catch (e) {
                setUser(null)
                router.push('sign-in')
            } finally {
                setLoaded(true);
            }
        };

        initAuth();
    }, []);

    if (loaded)
        return <>
            {children}
        </>;

    return <div>Загрузка...</div>;
};
