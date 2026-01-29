'use client'
import React, {createContext, useContext, useRef} from "react";
import { Howl } from 'howler';


type AudioContextType = React.RefObject<Howl | null>

const AudioContext = createContext<AudioContextType | null>(null)

export const AudioProvider = ({children}: {children: React.ReactNode}) => {

    const audioRef = useRef<Howl | null>(null)

    return (
        <AudioContext value={audioRef}>
            {children}
        </AudioContext>
    )
}

export const useAudioInstance = () => {
    const context = useContext(AudioContext);
    if (!context) {
        throw new Error("useAudioInstance must be used within AudioProvider");
    }
    return context;
};