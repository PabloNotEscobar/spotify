'use client'
import {PlayerSettings} from "@/widgets/player/ui/PlayerSettings";
import {NowPlaying} from "@/widgets/player/ui/NowPlaying";
import PlayerSettingsRight from "@/widgets/player/ui/PlayerSettingsRight";
import React, {useEffect} from "react";
import {usePlayerStore} from "@/widgets/player/model/player-store";
import { Howl } from 'howler'; // Добавьте эту строку
import { throttle } from 'es-toolkit';


let audio: Howl | null = null;

export function Player () {

    const setDuration = usePlayerStore(state => state.setDuration)
    const active = usePlayerStore(state => state.active)
    const play = usePlayerStore(state => state.play)
    const setPlay = usePlayerStore(state => state.setPlay)
    const setPause = usePlayerStore(state => state.setPause)
    const volume = usePlayerStore(state => state.volume)
    const setVolume = usePlayerStore(state => state.setVolume)
    const setCurrentTime = usePlayerStore(state => state.setCurrentTime)

    // useEffect(() => {
    //     if (!audio) {
    //         audio = new Howl({
    //             src: [`http://localhost:4000${active?.audio}`],
    //             html5: true,
    //         });
    //         audio.volume(volume / 100)
    //     }
    // }, [])

    useEffect(() => {
        if (audio) {
            if (play) {
                console.log(6)
                if (!audio.playing()) {
                    audio.play();
                }
                audio.volume(0);
                setTimeout(() => {
                    if (audio && play) audio.fade(0, volume / 100, 150);
                }, 50);
                console.log('7')
            } else {
                console.log('2')
                audio.fade(audio.volume(), 0, 150);
                audio.once('fade', () => {
                    if (audio && !play)
                        audio.pause();
                });
                console.log('3')
            }
        }
    }, [play])

    useEffect(() => {
        if (active?.audio) {
            console.log('4')
            if (audio)
            audio.unload()
            audio = new Howl({
                src: [`http://localhost:4000${active?.audio}`],
                html5: false,
                volume: 0,
                onload: function() {
                    if (audio) {
                        setDuration(audio.duration());
                    }
                }
            });
            console.log('5')
            setPlay()
        }
    }, [active?.audio])





    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const percent = Number(e.target.value);
        if (audio)
        audio.seek((percent / 100) * audio.duration())
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audio)
        audio.volume(Number(e.target.value) / 100)
        setVolume(Number(e.target.value))
    }

    const toggleMute = () => {
        if (audio) {
            if (volume > 0) {
                audio.volume(0)
                setVolume(0);
            } else {
                audio.volume(0.80)
                setVolume(80);
            }
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