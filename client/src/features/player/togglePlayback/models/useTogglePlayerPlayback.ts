'use client'
import {usePlayerStore} from "@/widgets/player/model/player-store";

export const useTogglePlayerPlayback = () => {
    const play = usePlayerStore(state => state.play);
    const setPlay = usePlayerStore(state => state.setPlay);
    const setPause = usePlayerStore(state => state.setPause);

    const playHandler = () => {
        if (!play) {
            setPlay();
        } else {
            setPause();
        }
    };

    return {play, playHandler}
}