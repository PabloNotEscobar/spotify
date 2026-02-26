import {TrackImage} from "@/shared/ui/track/TrackImage";
import {TrackInfoHome} from "@/shared/ui/track/TrackInfoHome";
import Link from "next/link";
import {ITrack} from "@/entities/track";
import {ToggleCardPlayButton} from "@/features/player/togglePlayback";

interface TrackCardHomeProps {
    track: ITrack
}

export function TrackCardHome ({track}: TrackCardHomeProps) {

    const imageUrl = `${track.image}`
    console.log(imageUrl)

    return (
        <div className={"p-3 select-none group flex rounded-[4px] relative flex-col items-center cursor-pointer duration-100 ease-in hover:bg-white/8 hover:shadow-xl border border-transparent hover:border-white/20 active:bg-black lg:w-[195px] lg:h-[247px] max-lg:w-[178px] max-lg:h-[230px]"}>
            <Link href={`/track/${track.id}`} className="absolute inset-0 z-1"/>
            <TrackImage imageUrl={imageUrl} id={track.id} className={"flex items-end"}>
                <ToggleCardPlayButton
                    track={track}
                    animation={'inset-0 z-2 mr-2 opacity-0 mb-0 duration-150 ease-in group-hover:opacity-100 group-hover:mb-2  group hover:scale-110 active:scale-100 active:bg-green-600'}
                />
            </TrackImage>
            <TrackInfoHome trackId={String(track.id)} artistId={track.artistId} name={track.name} artistName={track.artist?.name || ""}/>
        </div>
    )
}
