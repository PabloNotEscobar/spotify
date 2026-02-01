'use client'
import { usePlayerStore } from "@/widgets/player/model/player-store";
import React from "react";
import {TogglePlayerPlayButton} from "@/features/player/togglePlayback";
import {TrackProgressBar} from "@/shared/ui/player/TrackProgressBar";


export function PlayerSettings ({changeCT}: {changeCT: (e: React.ChangeEvent<HTMLInputElement>) => void}) {

    const currentTime = usePlayerStore(s => s.currentTime);
    const duration = usePlayerStore(s => s.duration);
    const active = usePlayerStore(s => s.active);

    const progress = duration > 0 ? (currentTime / duration) * 100 : 0;


    return (
        <div className="w-full h-full flex flex-col justify-center items-center">
            <div className="w-full h-8 mb-2 flex flex-col justify-between items-center gap-x-8">
                <TogglePlayerPlayButton/>
            </div>

            <TrackProgressBar active={active} progress={progress} changeCT={changeCT}/>
        </div>
    );
}