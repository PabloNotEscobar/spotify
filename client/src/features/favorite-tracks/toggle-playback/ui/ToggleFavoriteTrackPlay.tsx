'use client'
import {PlayButtonCard} from "@/shared/ui/track";
import {useToggleCardPlayback} from "@/features/player/togglePlayback/models/useToggleCardPlayback";
import {ITrack} from "@/entities/track";
import {FavoriteTrackCardRow} from "@/entities/track/ui/FavoriteTrackCardRow";
import {IFavoriteTrack} from "@/entities/favorite-track/types";

interface IToggleFavoriteTrackPlay {
    fTrack: IFavoriteTrack
}

export function ToggleFavoriteTrackPlay ({fTrack}: IToggleFavoriteTrackPlay) {


    const {play, playHandler, active} = useToggleCardPlayback(fTrack.track)

    return (
                <FavoriteTrackCardRow fTrack={fTrack} active={active} play={play} playHandler={playHandler} />
    )
}
