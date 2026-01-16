'use client'
import {PlayButtonPlayer} from "@/shared/ui/player/PlayButtonPlayer";
import {useTogglePlayerPlayback} from "@/features/player/togglePlayback/models/useTogglePlayerPlayback";

interface TogglePlayerPlayButton {
    circleDiameter?: string
    iconSize?: string
    color?: string
}

export function TogglePlayerPlayButton ({circleDiameter, iconSize, color}: TogglePlayerPlayButton) {

    const {play, playHandler} = useTogglePlayerPlayback()

    return (
        <PlayButtonPlayer play={play} playClickHandler={playHandler} circleDiameter={circleDiameter} iconSize={iconSize} color={color}/>
    )
}
