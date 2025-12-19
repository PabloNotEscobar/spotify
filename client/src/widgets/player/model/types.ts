import {ITrack} from "@/entities/track";

export type PlayerState = {
    active: null | ITrack
    volume: number
    duration: number
    currentTime: number
    play: boolean
}


export type CounterActions = {
    setPlay: () => void
    setPause: () => void
    setActive: (track: ITrack | null) => void
    setDuration: (duration: number) => void
    setCurrentTime: (time: number) => void
    setVolume: (volume: number) => void
}


export type PlayerStore = PlayerState & CounterActions