'use client'
import React, { createContext, useContext, useRef } from "react"
import {usePlayerStore} from "@/widgets/player/model/player-store";

type AudioContextType = {
    audioRef: React.RefObject<HTMLAudioElement>
    fadeIn: () => void
    fadeOut: () => Promise<void>
}

const AudioContext = createContext<AudioContextType | null>(null)

export const AudioProvider = ({ children }: { children: React.ReactNode }) => {
    const audioRef = useRef<HTMLAudioElement>(new Audio())
    const volume = usePlayerStore(state => state.volume)


    function fadeOut (duration = 600): Promise<void> {
        return new Promise((resolve) => {
            const audio = audioRef.current
            const step = audio.volume / (duration / 50)
            const interval = setInterval(() => {
                if (audio.volume > step) {
                    audio.volume = Math.max(0, audio.volume - step)
                } else {
                    audio.volume = 0
                    clearInterval(interval)
                    resolve()
                }
            }, 25)
        })
    }

    function fadeIn(duration: number = 600): void {
        const audio = audioRef.current
        audio.volume = 0
        const step = (volume / 100) / (duration / 50)
        const interval = setInterval(() => {
            if (audio.volume + step < volume / 100) {
                audio.volume = Math.min(volume / 100, audio.volume + step)
            } else {
                audio.volume = volume / 100
                clearInterval(interval)
            }
        }, 50)
    }

    return (
        <AudioContext value={{audioRef, fadeIn, fadeOut}}>
            {children}
        </AudioContext>
    )
}

export const useAudio = () => {
    const ctx = useContext(AudioContext)
    if (!ctx) throw new Error("useAudio must be used within AudioProvider")
    return ctx
}