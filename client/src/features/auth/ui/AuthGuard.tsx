'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { useUserStore } from '@/entities/user/model/user-store'

export const AuthGuard = ({ children }: { children: React.ReactNode }) => {
    const router = useRouter()
    const user = useUserStore(state => state)

    useEffect(() => {
        console.log('1')
        if (!user.id) {
            console.log('2')
            router.replace('/sign-in')
        } else if (user.role !== 'admin') {
            router.replace('/')
        }
    }, [user])

    if (!user.id) {
        return (
            <div className="flex items-center justify-center h-screen text-white">
                Проверка доступа...
        </div>
    )
    }

    return children
}
