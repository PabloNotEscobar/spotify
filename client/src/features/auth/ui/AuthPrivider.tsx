'use client' // Обязательно

import { useEffect, useState } from "react";
import { AuthApi } from "@/features/auth";
import {useRouter} from "next/navigation";
import {useUserStore} from "@/entities/user/model/user-store";

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

                if (data.user.role !== 'admin') {
                    router.replace('/');
                    return;
                }

            } catch (e) {
                setUser(null)
                router.replace('/sign-in');
            } finally {
                setLoaded(true);
            }
        };

        initAuth();
    }, []);

    if (loaded)
        return children


    return <div>Загрузка...</div>;
};
