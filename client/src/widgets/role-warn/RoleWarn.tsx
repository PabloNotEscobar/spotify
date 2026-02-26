'use client'
import Link from "next/link";
import {useUserStore} from "@/entities/user/model/user-store";
import {usePlayerStore} from "@/widgets/player/model/player-store";

export function RoleWarn () {

    const role = useUserStore(state => state.role)
    const color = usePlayerStore(state => state.active?.primaryColor)


    return (
        <div style={{
            // Используем backgroundImage вместо background
            backgroundImage: `linear-gradient(to bottom, ${color || '#121212'} 0%, #121212 100%)`,
            backgroundAttachment: 'local'
        }} className={'flex w-full h-[150px] px-7 justify-center items-center'} >
            <div
                 className={'h-[100px] w-full flex grid-rows-2 text-white mx-3 bg-white/8 shadow-xl border border-white/20 rounded-[4px] font-unica text-center whitespace-pre-line justify-center items-center text-[22px] overflow-y-auto'}>
                {
                    role === 'user'
                        ?
                        <p className={'overflow-y-auto'}>
                            {`You have the "user" role, so you can't release a track on the platform.\nIf you want to test the functionality of the "admin" role write to `}
                            <Link href="https://t.me/GuitaraMan" className={`hover:underline text-blue-600`}>@GuitaraMan</Link>
                            {` on Telegram`}
                        </p>
                        :
                        <p className={'overflow-y-auto'}>
                            {`Congrats, you have the "admin" role!\n`}
                            <Link href="https://t.me/GuitaraMan" className={`hover:underline text-blue-600`}>@GuitaraMan</Link>
                        </p>
                }
            </div>
        </div>
    )
}