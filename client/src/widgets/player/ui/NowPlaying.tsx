import {usePlayerStore} from "@/widgets/player/model/player-store";
import {PlayerTrackImage} from "@/shared/ui/track";
import Link from "next/link";
import {LikeTrackButton} from "@/features/track/like-track/ui/LikeTrackButton";


export function NowPlaying () {

    const active = usePlayerStore(state => state.active)

    return (
        <div className={'w-full h-full flex flex-row items-start '}>
            <div className={'h-full aspect-square mr-2 relative'}>
                <Link href={`/track/${active?.id}`} className="absolute inset-0 z-1"/>
                {active ? <PlayerTrackImage id={active?.id} imageUrl={active?.image} /> : <div></div>}
            </div>
            <div className={"inline-flex items-center justify-center h-full text-white mr-2 ml-2"}>
                <Link  href={`/track/${active?.id}`} className="hover:underline text-white">{active?.name}</Link>
            </div>
            <div className={'flex h-full justify-center'}>
                {
                    active
                        ?
                        <LikeTrackButton trackId={active.id} />
                        :
                        <></>
                }
            </div>
        </div>
    )
}