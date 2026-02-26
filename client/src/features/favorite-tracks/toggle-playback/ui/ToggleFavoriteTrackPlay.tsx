'use client'
import {useToggleCardPlayback} from "@/features/player/togglePlayback/models/useToggleCardPlayback";
import {ITrack} from "@/entities/track";
import {FavoriteTrackCardRow} from "@/entities/track/ui/FavoriteTrackCardRow";
import {IFavoriteTrack} from "@/entities/favorite-track/types";

interface IToggleFavoriteTrackPlay {
    fTrack: IFavoriteTrack,
    index: number
}

export function ToggleFavoriteTrackPlay ({fTrack, index}: IToggleFavoriteTrackPlay) {


    const {play, playHandler, active} = useToggleCardPlayback(fTrack.track)

    return (
                <FavoriteTrackCardRow fTrack={fTrack} active={active} play={play} playHandler={playHandler} index={index}/>
    )
}
