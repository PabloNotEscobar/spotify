'use client'
import {PlayerSettings} from "@/widgets/player/ui/PlayerSettings";
import {NowPlaying} from "@/widgets/player/ui/NowPlaying";
import PlayerSettingsRight from "@/widgets/player/ui/PlayerSettingsRight";
import React, {useEffect} from "react";
import {usePlayerStore} from "@/widgets/player/model/player-store";

let audio: HTMLAudioElement;

export function Player () {

    const setDuration = usePlayerStore(state => state.setDuration)
    const active = usePlayerStore(state => state.active)
    const play = usePlayerStore(state => state.play)
    const setPlay = usePlayerStore(state => state.setPlay)
    const setPause = usePlayerStore(state => state.setPause)
    const volume = usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)
    const setCurrentTime = usePlayerStore(state => state.setCurrentTime)

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
            audio.src = `http://localhost:3000${active?.audio}`
            audio.volume = volume / 100
            audio.onloadedmetadata = () => {
                setDuration(audio.duration)
            }
            audio.ontimeupdate = () => {
                setCurrentTime(audio.currentTime)
            }
        }
    }, [])

    useEffect(() => {
        if (active?.audio) {
            audio.pause()
            audio.src = `http://localhost:3000${active?.audio}`
            setPlay()
        }
    }, [active?.audio])

    useEffect(() => {
        if (play) {
            console.log('play')
            audio.play()
        } else {
            console.log('pause')
            audio.pause()
        }
    }, [play])



    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const percent = Number(e.target.value);
        audio.currentTime = (percent / 100) * audio.duration
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        audio.volume = Number(e.target.value) / 100
        setVolume(Number(e.target.value))
    }

    const toggleMute = () => {
        if (volume > 0) {
            audio.volume = 0
            setVolume(0);
        } else {
            audio.volume = 0.80
            setVolume(80);
        }
    };

    return (
        <div className={"flex flex-col w-full h-24 rounded-[8] box-border"}>
            <div className={"flex flex-row h- w-full h-18 bg-black rounded-[8] justify-center p-2 box-border"}>
                <div className="h-full w-30/100 flex justify-center items-center">
                    <NowPlaying />
                </div>
                <div className="h-full w-41/100 flex justify-center items-center">
                    <PlayerSettings changeCT={changeCurrentTime}/>
                </div>
                <div className="h-full w-29/100 flex justify-center items-center">
                    <PlayerSettingsRight changeVolume={changeVolume} volume={volume} toggleMute={toggleMute}/>
                </div>
            </div>
            <div className={"flex w-full h-4 rounded-[4] bg-green-500"}></div>
        </div>
    )
}
