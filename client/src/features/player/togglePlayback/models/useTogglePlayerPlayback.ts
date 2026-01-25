'use client'
import { usePlayerStore } from "@/widgets/player/model/player-store";
import { throttle } from 'es-toolkit';

const throttledAction = throttle((action: () => void) => {
    action();
}, 400);

export const useTogglePlayerPlayback = () => {
    const play = usePlayerStore(state => state.play);
    const setPlay = usePlayerStore(state => state.setPlay);
    const setPause = usePlayerStore(state => state.setPause);

    const playHandler = () => {
        throttledAction(() => {
            if (!play) {
                setPlay();
            } else {
                setPause();
            }
        });
    };

    return { play, playHandler };
}
