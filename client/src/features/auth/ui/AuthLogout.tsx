'use client'
import {useEffect} from "react";
import {AdminButton} from "@/shared/ui/navbar/AdminButton";
import {AuthApi} from "@/features/auth";
import {LogoutButton} from "@/shared/ui/navbar/LogoutButton";
import {useRouter} from "next/navigation";


export function AuthLogout () {
    const router = useRouter()


    const clickHandler = async () => {
        await AuthApi.logout()
        router.replace('sign-in')
    }

    return (
        <LogoutButton clickHandler={clickHandler}/>
    )
}