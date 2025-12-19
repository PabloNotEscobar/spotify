'use client'
import {PlayButtonCard} from "@/shared/ui/track";
import {useToggleCardPlayback} from "@/features/player/togglePlayback/models/useToggleCardPlayback";
import {ITrack} from "@/entities/track";

interface IToggleCardPlayButton {
    track: ITrack
}

export function ToggleCardPlayButton ({track}: IToggleCardPlayButton) {

    const {play, playHandler, active} = useToggleCardPlayback(track)

    return (
        <PlayButtonCard track={track} active={active} play={play} playHandler={playHandler} />
    )
}
