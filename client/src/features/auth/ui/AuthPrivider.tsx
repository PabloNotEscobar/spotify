'use client' // Обязательно

import { useEffect, useState } from "react";
import { AuthApi } from "@/features/auth";
import {useRouter} from "next/navigation";

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
    const [isLoading, setIsLoading] = useState(true);
    const router = useRouter()


    useEffect(() => {
        const initAuth = async () => {
            try {
                await AuthApi.refresh();
                console.log("Авторизация восстановлена");
            } catch (e) {
                router.push('')
            } finally {
                setIsLoading(false);
            }
        };

        initAuth();
    }, []);

    if (isLoading) return <div>Загрузка...</div>;

    return <>{children}</>;
};
