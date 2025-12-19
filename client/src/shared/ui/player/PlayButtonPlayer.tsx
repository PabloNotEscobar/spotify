'use client'
import {IPlayButtonPlayer} from "@/shared/types"
import React from "react";
import {usePlayerStore} from "@/widgets/player/model/player-store";


export function PlayButtonPlayer({ className , play, playClickHandler}: IPlayButtonPlayer) {
    return (
        <div className={`cursor-pointer bg-white w-8 h-8 shadow-xl/50 rounded-full flex justify-center items-center ${className}`} onClick={playClickHandler}>
            <svg viewBox="0 0 24 24" className="w-5 h-5 flex content-center items-center justify-center">
                {
                    play
                        ?
                        <path className="fill-black" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path>
                        :
                        <path className="fill-black" d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                }

            </svg>

            {/*<svg viewBox="0 0 24 24" className="w-6 h-6 hidden group-hover:block">*/}
            {/*    <path className="fill-black" d="M5.7 3a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7H5.7zm10 0a.7.7 0 0 0-.7.7v16.6a.7.7 0 0 0 .7.7h2.6a.7.7 0 0 0 .7-.7V3.7a.7.7 0 0 0-.7-.7h-2.6z"/>*/}
            {/*</svg>*/}
        </div>
    );
}