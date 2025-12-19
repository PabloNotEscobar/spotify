'use client'
import {usePlayerStore} from "@/widgets/player/model/player-store";
import {ITrack} from "@/entities/track";

export const useToggleCardPlayback = (track: ITrack) => {
    const active = usePlayerStore(state => state.active)
    const setPlay = usePlayerStore(state => state.setPlay)
    const setPause = usePlayerStore(state => state.setPause)
    const play = usePlayerStore(state => state.play)
    const setActive = usePlayerStore(state => state.setActive)


    const playHandler = () => {
        if (track.id === active?.id && play) {
            setPause()
        } else if (track.id === active?.id && !play) {
            setPlay()
        } else {
            console.log('1')
            setPause()
            console.log('2')
            setActive(track)
            console.log('3')
            console.log('4')

        }
    }

    return {play, playHandler, active}
}