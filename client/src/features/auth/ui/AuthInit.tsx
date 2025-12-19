'use client'
import {useEffect} from "react";
import {AuthApi} from "@/features/auth/model/auth.api";
import {useUserStore} from "@/entities/user/model/user-store";

export function AuthInit () {

    const setUser = useUserStore(state => state.setUser)

    useEffect(() => {
        AuthApi.refresh()
            .then(data => setUser(data.user))
            .catch(() => setUser(null))
    }, [])

    return (
        <div>

        </div>
    )
}
