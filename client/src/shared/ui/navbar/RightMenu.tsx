'use client'

import {useUserStore} from "@/entities/user/model/user-store";
import {AdminButton} from "@/shared/ui/navbar/AdminButton";
import {LogoutButton} from "@/shared/ui/navbar/LogoutButton";
import {LoginButton} from "@/shared/ui/navbar/LoginButton";
import {AuthLogout} from "@/features/auth/ui/AuthLogout";

export function RightMenu () {

    const role = useUserStore(state => state.role)
    const isAuth = useUserStore(state => state.isAuth)

    return (
        <div className={"w-full h-full flex flex-row gap-y-10"}>
            {
                role === 'admin'
                    ? <AdminButton />
                    : null
            }
            {
                isAuth
                    ? <AuthLogout />
                    : <LoginButton />
            }
        </div>
    )
}