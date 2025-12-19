'use client'
import {PlayButtonCardProps} from "@/shared/types"


export function PlayButtonCard({ track, active, play, playHandler }: PlayButtonCardProps) {


    return (
        <div onClick={playHandler} className={`bg-green-500 w-12 h-12 shadow-xl/50 rounded-full flex justify-center items-center inset-0 z-2 mr-2 opacity-0 mb-0 duration-150 ease-in group-hover:opacity-100 group-hover:mb-2  group hover:scale-110 active:scale-100 active:bg-green-600 hover:bg-green-400}`} >
            <svg viewBox="0 0 24 24" className="w-6 h-6 flex content-center items-center justify-center">
                {
                    track.id === active?.id && play
                        ?
                        <path className="fill-black" d="M6 4h4v16H6V4zm8 0h4v16h-4V4z"></path>
                        :
                        <path className="fill-black" d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606"></path>
                }
            </svg>
        </div>
    );
}