'use client'
import {CreateTrackCard} from "@/widgets/admin/ui/CreateTrackCard";
import Link from "next/link";

export default function Page () {

    return (
        <div className={'w-full h-full p-2 flex flex-row justify-center items-center'}>
            <div className={'h-full w-1/2 hover:bg-[#121212] text-white cursor-pointer text-xl rounded-[4px]'}>
                <Link href={'/admin/create-artist'} className={'h-full w-full flex justify-center items-center'}>
                    Create Artist
                </Link>
            </div>
            <div className={'h-full w-1/2 hover:bg-[#121212] text-white cursor-pointer text-xl rounded-[4px]'}>
                <Link href={'/admin/create-track'} className={'h-full w-full flex justify-center items-center'}>
                    Create Track
                </Link>
            </div>

        </div>
    )
}
