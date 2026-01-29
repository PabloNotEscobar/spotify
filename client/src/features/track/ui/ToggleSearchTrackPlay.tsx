import {useToggleCardPlayback} from "@/features/player/togglePlayback/models/useToggleCardPlayback";
import {ITrack, SearchTrackCardRow} from "@/entities/track";

interface ToggleSearchTrackPlayProps {
    track: ITrack

}

export function ToggleSearchTrackPlay ({track}: ToggleSearchTrackPlayProps) {


    const {play, playHandler, active} = useToggleCardPlayback(track)

    return (
        <SearchTrackCardRow track={track} active={active} play={play} playHandler={playHandler} />
    )
}