import {ITrack} from "@/entities/track";
import Link from "next/link";
import {IFavoriteTrack} from "@/entities/favorite-track/types";

interface SearchTrackProps {
    track: ITrack
    active: ITrack | null
    play: boolean
    playHandler: () => void
}

export function SearchTrackCardRow ({track, active, play, playHandler}: SearchTrackProps) {
    return (
        <div className={"w-full h-[54px] hover:bg-[#1F1F1F] rounded-sm px-4 flex flex-row items-center relative group"} onClick={playHandler}>
            {/*<Link href={`/track/${fTrack.track?.id}`} className="absolute inset-0 z-1 cursor-default"/>*/}
            <div className={`w-4 h-full flex justify-center items-center mr-4 z-0 group-hover:hidden ${track.id === active?.id ? 'text-green-500' : 'text-white'}`}>
                {track?.id}
            </div>
            <div className={'w-4 h-full flex justify-center items-center text-white mr-4 z-0 hidden group-hover:flex'}>
                {
                    play && track.id === active?.id
                        ?
                        <svg width="16" height="16" fill="currentColor" viewBox="0 0 16 16">
                            <path d="M5.5 3.5A.5.5 0 0 1 6 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5zm5 0A.5.5 0 0 1 11 4v8a.5.5 0 0 1-1 0V4a.5.5 0 0 1 .5-.5z"/>
                        </svg>
                        :
                        <svg
                            role="img"
                            height="16"
                            width="16"
                            viewBox="0 0 16 16"
                            fill="currentColor"
                        >
                            <path d="M3 1.713a.7.7 0 0 1 1.05-.607l10.89 6.288a.7.7 0 0 1 0 1.212L4.05 14.894A.7.7 0 0 1 3 14.288V1.713z"></path>
                        </svg>
                }

            </div>
            <div className={`h-10 flex justify-center aspect-square z-0 mr-3`}>
                <img
                    src={`${track.image}`}
                    alt={String(track.id)}
                    key={track.id}
                    draggable={false}
                    className="rounded-[4px]"
                />
            </div>
            <div className={'w-31/100 h-10  flex flex-col mr-4 min-w-0'}>
                <div className={'w-full h-5 flex justify-start items-center hover:text-underline text-white truncate'}>
                    <Link href={`/track/${track?.id}`} className={`z-2 cursor-pointer hover:underline ${track.id === active?.id ? 'text-green-500' : 'text-white'}`}>{track?.name}</Link>
                </div>
                <div className={'w-full h-5 flex justify-start items-center text-[#9E9E9E] truncate'}>
                    <Link href={`/artist/${track?.artist?.id}`} className={'z-2 cursor-pointer hover:underline'}>{track?.artist?.name}</Link>
                </div>
            </div>
            <div className={'w-25/100 h-full flex justify-center items-center text-[#9E9E9E] overflow-x-auto'}>
                <Link href={`/album/${track?.album?.id}`} className={'z-2 cursor-pointer hover:underline'}>{track?.album?.name}</Link>
            </div>
        </div>
    )
}