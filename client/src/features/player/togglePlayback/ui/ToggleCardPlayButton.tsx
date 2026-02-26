'use client'
import {useToggleCardPlayback} from "@/features/player/togglePlayback/models/useToggleCardPlayback";
import {ITrack} from "@/entities/track";
import {PlayButton} from "@/shared/ui/buttons/PlayButton";
import {PauseButton} from "@/shared/ui/buttons/PauseButton";

interface IToggleCardPlayButton {
    track: ITrack
    animation?: string
}

export function ToggleCardPlayButton ({track, animation}: IToggleCardPlayButton) {

    const {play, playHandler, active} = useToggleCardPlayback(track)

    return (
            track.id === active?.id && play
                ?
                <PlayButton playHandler={playHandler} animation={animation}/>
                :
                <PauseButton playHandler={playHandler} animation={animation}/>
    )
}
