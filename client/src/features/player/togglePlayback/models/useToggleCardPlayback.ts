'use client'
import {usePlayerStore} from "@/widgets/player/model/player-store";
import {ITrack} from "@/entities/track";
import {useAudio} from "@/shared/providers/audio-provider";
import {throttle} from "es-toolkit";

const throttledAction = throttle((action: () => void) => {
    action();
}, 400);

export const useToggleCardPlayback = (track: ITrack) => {
    const active = usePlayerStore(state => state.active)
    const setPlay = usePlayerStore(state => state.setPlay)
    const setPause = usePlayerStore(state => state.setPause)
    const play = usePlayerStore(state => state.play)
    const setActive = usePlayerStore(state => state.setActive)
    const {audioRef, fadeIn, fadeOut} = useAudio()
    const audio = audioRef.current


    const playHandler = async () => {
        throttledAction(() => {
            if (track.id === active?.id && play) {
                audio.pause()
                setPause()
            } else if (track.id === active?.id && !play) {
                audio.play()
                setPlay()
            } else {
                audio.pause()
                audio.src = `${track.audio}`
                audio.play()
                setPlay()
                setActive(track)
            }
        })

    }

    return {play, playHandler, active}
}