'use client'
import {PlayerSettings} from "@/widgets/player/ui/PlayerSettings";
import {NowPlaying} from "@/widgets/player/ui/NowPlaying";
import PlayerSettingsRight from "@/widgets/player/ui/PlayerSettingsRight";
import React, {useEffect} from "react";
import {usePlayerStore} from "@/widgets/player/model/player-store";
import { Howl } from 'howler'; // Добавьте эту строку
import { throttle } from 'es-toolkit';
import {useAudioInstance} from "@/shared/providers/audio-provider";



export function Player () {

    const color = usePlayerStore(state => state.active?.primaryColor)

    const {
        active, play, volume,
        setDuration, setPlay, setVolume
    } = usePlayerStore();

    const audioRef = useAudioInstance()

    useEffect(() => {
        if (audioRef.current) {
            const audio = audioRef.current
            if (play) {
                console.log(6)
                audio.play()
                setTimeout(() => {
                    if (audio && play) audio.fade(0, volume / 100, 150);
                }, 150);
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
    }, [audioRef, play])

    useEffect(() => {
        const loadNewTrack = () => {
            audioRef.current = new Howl({
                src: [`${active?.audio}`],
                html5: false,
                volume: 0,
                onload: function() {
                    if (audioRef.current) {
                        setDuration(audioRef.current.duration());
                        setPlay()
                    }
                }
            });
        }

        if (audioRef.current) {
            console.log('4')
            if (audioRef.current)
            setTimeout(() => {
                console.log('пауза дождался')
                if (audioRef.current) audioRef.current.unload()
                loadNewTrack()
            }, 150)
            console.log('5')
        } else {
            if (active?.audio) {
                loadNewTrack()
            }
        }
    }, [active?.audio, setDuration, setPlay])


    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const percent = Number(e.target.value);
        if (audioRef.current)
            audioRef.current.seek((percent / 100) * audioRef.current.duration())
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        if (audioRef.current)
            audioRef.current.volume(Number(e.target.value) / 100)
        setVolume(Number(e.target.value))
    }

    const toggleMute = () => {
        if (audioRef.current) {
            if (volume > 0) {
                audioRef.current.volume(0)
                setVolume(0);
            } else {
                audioRef.current.volume(0.80)
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
            <div className={"flex w-full h-4 rounded-[4px] "} style={{
                background: color || '#4ade80'
            }}></div>
        </div>
    )
}