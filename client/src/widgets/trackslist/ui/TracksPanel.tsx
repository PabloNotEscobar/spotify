import '@/shared/ui/scrollbar/ScrollBar.css'
import {TrackCardHome} from "@/entities/track";
import {getTracks} from "@/shared/api";

export async function TracksPanel () {

    const tracks = await getTracks()


    return (
        <div className={"overflow-y-auto flex flex-row flex-wrap h-full w-full items-start content-start "}>
            {tracks.map(track =>
                <TrackCardHome track={track} key={track.id}/>
            )}
        </div>
    )
}
