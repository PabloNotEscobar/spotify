'use client'
import React, {ReactNode} from "react";
import {usePlayerStore} from "@/widgets/player/model/player-store";

interface DynamicBackground {
    children: ReactNode
}

export function DynamicBackground ({children}: DynamicBackground) {

    const color = usePlayerStore(state => state.active?.primaryColor)

    return (
        <div
            style={{
                background: `linear-gradient(to bottom, ${color || '#121212'} 0%, #121212 30%)`
            }}
            className={"overflow-y-auto flex-1 w-full h-full rounded-[8] bg-[#121212]"}
        >
            {children}
        </div>
    )
}