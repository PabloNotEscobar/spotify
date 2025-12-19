'use client'
import {PlayButtonPlayer} from "@/shared/ui/player/PlayButtonPlayer";
import {useTogglePlayerPlayback} from "@/features/player/togglePlayback/models/useTogglePlayerPlayback";

export function TogglePlayerPlayButton () {

    const {play, playHandler} = useTogglePlayerPlayback()

    return (
        <PlayButtonPlayer play={play} playClickHandler={playHandler} />
    )
}
