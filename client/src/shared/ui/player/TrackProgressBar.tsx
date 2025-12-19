'use client'; // Убедитесь, что этот файл является клиентским компонентом

import React from "react";
import { ITrack } from "@/entities/track";
import { usePlayerStore } from "@/widgets/player/model/player-store";

const formatTime = (seconds: number): string => {
    if (isNaN(seconds) || seconds < 0) {
        return '00:00';
    }
    const minutes = Math.floor(seconds / 60);
    const remainingSeconds = Math.floor(seconds % 60);
    const formattedSeconds = remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds;
    return `${minutes}:${formattedSeconds}`;
};


interface TrackProgressBarProps {
    active: ITrack | null;
    progress: number;
    changeCT: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export function TrackProgressBar({ active, progress, changeCT }: TrackProgressBarProps) {
    const currentTime = usePlayerStore(state => state.currentTime);
    const duration = usePlayerStore(state => state.duration);

    const formattedCurrentTime = formatTime(currentTime);
    const formattedDuration = formatTime(duration);

    return (
        <div className="w-full px-4">
            {active
                ?
                <div className={'flex items-center gap-3'}>

                    <div className="text-xs text-white/70 tabular-nums">
                        {formattedCurrentTime}
                    </div>

                    <div
                        className="group relative h-4 flex-1 cursor-pointer select-none"
                        role="progressbar"
                        aria-valuemin={0}
                        aria-valuemax={100}
                        aria-valuenow={progress}
                    >
                        <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/20" />

                        <div
                            className="absolute top-1/2 h-1 bg-[#1ed760] rounded-full -translate-y-1/2"
                            style={{ width: `${progress}%` }}
                        />
                        <div
                            className="pointer-events-none absolute top-1/2 h-3 w-3 rounded-full bg-white -translate-x-1/2 -translate-y-1/2"
                            style={{ left: `${progress}%` }}
                        />

                        <input
                            type="range"
                            min="0"
                            max="100"
                            step="0.1"
                            value={progress}
                            onChange={(e) => changeCT(e)}
                            className="absolute inset-0 w-full cursor-pointer opacity-0"
                        />
                    </div>

                    <div className="text-xs text-white/70 tabular-nums">
                        {formattedDuration}
                    </div>

                </div>
                :
                <div
                    className="group relative h-4 w-full cursor-pointer select-none"
                    role="progressbar"
                    aria-valuemin={0}
                    aria-valuemax={100}
                    aria-valuenow={progress}
                >
                    <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/20" />
                </div>
            }
        </div>
    )
}
