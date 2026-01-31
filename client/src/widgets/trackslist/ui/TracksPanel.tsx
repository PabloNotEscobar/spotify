import '@/shared/ui/scrollbar/ScrollBar.css'
import {TrackCardHome} from "@/entities/track";
import {getTracks} from "@/shared/api";

export async function TracksPanel () {

    const tracks = await getTracks()


    return (
        <div className={"w-full h-full mt-7 z-0  px-7 "}>
            <div className={"flex flex-row flex-wrap h-full w-full items-start content-start "}>
                {tracks.map(track =>
                    <TrackCardHome track={track} key={track.id}/>
                )}
            </div>
        </div>

    )
}
