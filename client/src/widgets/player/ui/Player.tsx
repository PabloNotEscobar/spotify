'use client'
import {PlayerSettings} from "@/widgets/player/ui/PlayerSettings";
import {NowPlaying} from "@/widgets/player/ui/NowPlaying";
import PlayerSettingsRight from "@/widgets/player/ui/PlayerSettingsRight";
import React, {useEffect, useRef} from "react";
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

    const fadeIntervalRef = useRef<NodeJS.Timeout | null>(null);
    const targetVolumeRef = useRef(volume / 100);

    // ✅ Функция плавного затухания
    const fadeOut = (callback?: () => void) => {
        if (!audio) return;

        if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
        }

        const fadeDuration = 150; // 150ms
        const steps = 15;
        const stepTime = fadeDuration / steps;
        const volumeStep = audio.volume / steps;

        fadeIntervalRef.current = setInterval(() => {
            if (!audio) return;

            audio.volume = Math.max(0, audio.volume - volumeStep);

            if (audio.volume <= 0) {
                if (fadeIntervalRef.current) {
                    clearInterval(fadeIntervalRef.current);
                    fadeIntervalRef.current = null;
                }
                callback?.();
            }
        }, stepTime);
    };

    // ✅ Функция плавного появления
    const fadeIn = () => {
        if (!audio) return;

        if (fadeIntervalRef.current) {
            clearInterval(fadeIntervalRef.current);
        }

        audio.volume = 0;

        const fadeDuration = 150; // 150ms
        const steps = 15;
        const stepTime = fadeDuration / steps;
        const volumeStep = targetVolumeRef.current / steps;

        fadeIntervalRef.current = setInterval(() => {
            if (!audio) return;

            audio.volume = Math.min(targetVolumeRef.current, audio.volume + volumeStep);

            if (audio.volume >= targetVolumeRef.current) {
                if (fadeIntervalRef.current) {
                    clearInterval(fadeIntervalRef.current);
                    fadeIntervalRef.current = null;
                }
            }
        }, stepTime);
    };

    useEffect(() => {
        if (!audio) {
            audio = new Audio()
            audio.volume = volume / 100
            targetVolumeRef.current = volume / 100

            audio.onloadedmetadata = () => {
                setDuration(audio.duration)
            }
            audio.ontimeupdate = () => {
                setCurrentTime(audio.currentTime)
            }
        }

        // Cleanup при размонтировании
        return () => {
            if (fadeIntervalRef.current) {
                clearInterval(fadeIntervalRef.current);
            }
        };
    }, [])

    // ✅ Обработка изменения play с fade
    useEffect(() => {
        if (!audio) return

        if (play) {
            audio.play().then(() => {
                fadeIn();
            });
        } else {
            fadeOut(() => {
                audio.pause();
            });
        }
    }, [play])

    // ✅ Обработка смены трека с fade
    useEffect(() => {
        if (active?.audio) {
            // Если что-то играет, сначала fade out
            if (!audio.paused) {
                fadeOut(() => {
                    audio.src = `http://localhost:3000${active?.audio}`
                    setPlay()
                });
            } else {
                // Если на паузе, просто меняем
                audio.src = `http://localhost:3000${active?.audio}`
                setPlay()
            }
        }
    }, [active?.audio])

    const changeCurrentTime = (e: React.ChangeEvent<HTMLInputElement>) => {
        const percent = Number(e.target.value);
        audio.currentTime = (percent / 100) * audio.duration
    }

    const changeVolume = (e: React.ChangeEvent<HTMLInputElement>) => {
        const newVolume = Number(e.target.value) / 100;
        targetVolumeRef.current = newVolume;

        // Если не идёт fade, меняем громкость сразу
        if (!fadeIntervalRef.current) {
            audio.volume = newVolume;
        }

        setVolume(Number(e.target.value));
    }

    const toggleMute = () => {
        if (volume > 0) {
            audio.volume = 0
            targetVolumeRef.current = 0;
            setVolume(0);
        } else {
            audio.volume = 0.80
            targetVolumeRef.current = 0.80;
            setVolume(80);
        }
    };

    return (
        <div className={"flex flex-col w-full h-24 rounded-[8] box-border"}>
            <div className={"flex flex-row h- w-full h-18 bg-black rounded-[8] justify-center p-2 box-border"}>
                <div className="h-full w-30/100 flex justify-center items-center">
                    {
                        active
                            ?
                            <NowPlaying />
                            :
                            <></>
                    }

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