'use client'
import { usePlayerStore } from "@/widgets/player/model/player-store";
import { throttle } from 'es-toolkit';
import {useAudio} from "@/shared/providers/audio-provider";

const throttledAction = throttle((action: () => void) => {
    action();
}, 400);

export const useTogglePlayerPlayback = () => {
    const play = usePlayerStore(state => state.play);
    const setPlay = usePlayerStore(state => state.setPlay);
    const setPause = usePlayerStore(state => state.setPause);
    const {audioRef} = useAudio()
    const audio = audioRef.current

    const playHandler = () => {
        throttledAction(() => {
            if (!play) {
                audio.play()
                setPlay();
            } else {
                audio.pause()
                setPause();
            }
        });
    };

    return { play, playHandler };
}
