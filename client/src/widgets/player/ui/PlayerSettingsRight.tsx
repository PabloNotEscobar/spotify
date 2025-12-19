import React from "react";
import {QueueButton, VolumeIcon} from "@/shared/ui/player";

interface PlayerSettingsRight {
    changeVolume: (e: React.ChangeEvent<HTMLInputElement>) => void
    volume: number
    toggleMute: () => void
}

export default function PlayerSettingsRight ({changeVolume, volume, toggleMute}: PlayerSettingsRight) {
    return (
        <div className=" h-full flex flex-row items-center gap-3 w-full justify-center">

            {/* Кнопка Mute/Unmute */}
            <button onClick={toggleMute} aria-label="Toggle Mute" className={'text-white opacity-70 hover:opacity-100 transition-opacity duration-150 cursor-pointer'}>
                <VolumeIcon volume={volume} />
            </button>

            {/* Визуальный контейнер прогресс-бара */}
            <div
                className="group relative h-4 w-32 cursor-pointer select-none"
                role="progressbar"
                aria-valuemin={0}
                aria-valuemax={100}
                aria-valuenow={volume}
            >
                {/* Фон шкалы */}
                <div className="absolute inset-x-0 top-1/2 h-1 -translate-y-1/2 rounded-full bg-white/20" />

                {/* Заполнение шкалы */}
                <div
                    className="absolute top-1/2 h-1 bg-green-500 rounded-full -translate-y-1/2"
                    style={{ width: `${volume}%` }}
                />

                {/* Ползунок (визуальный) */}
                <div
                    className="pointer-events-none absolute top-1/2 h-3 w-3 rounded-full bg-white shadow-lg -translate-x-1/2 -translate-y-1/2"
                    style={{ left: `${volume}%` }}
                />

                {/* RANGE INPUT (функциональный, скрытый) */}
                <input
                    type="range"
                    min="0"
                    max="100"
                    step="1"
                    value={volume}
                    onChange={changeVolume}
                    className="absolute inset-0 w-full h-full cursor-pointer opacity-0"
                    aria-label="Volume Control"
                />
            </div>

            <QueueButton />
        </div>
    )
}
