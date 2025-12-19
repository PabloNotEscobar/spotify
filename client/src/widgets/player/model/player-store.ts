import { create } from "zustand";
import { PlayerState, PlayerStore } from "@/widgets/player/model/types";
import { devtools } from 'zustand/middleware';
import {ITrack} from "@/entities/track";

export const defaultInitState: PlayerState = {
    active: null,
    volume: 80,
    duration: 0,
    currentTime: 0,
    play: false,
};

export const usePlayerStore = create<PlayerStore>()(
    devtools(
        (set) => ({
            ...defaultInitState,

            setPlay: () =>
                set({ play: true }, false, 'player/setPlay'),

            setPause: () =>
                set({ play: false }, false, 'player/setPause'),

            setActive: (active: ITrack | null) =>
                set(
                    { active, duration: 0, currentTime: 0 },
                    false,
                    'player/setActive'
                ),

            setDuration: (duration: number) =>
                set({ duration }, false, 'player/setDuration'),

            setCurrentTime: (currentTime: number) =>
                set({ currentTime }, false, 'player/setCurrentTime'),

            setVolume: (volume: number) =>
                set({ volume }, false, 'player/setVolume'),
        }),
        {
            name: 'Player Store', // Имя в DevTools
            // store: 'player',    // опционально
        }
    )
);