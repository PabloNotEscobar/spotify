'use client'
import React, {ReactNode} from "react";
import {usePlayerStore} from "@/widgets/player/model/player-store";

interface DynamicBackground {
    children: ReactNode
}

export function DynamicBackground ({children}: DynamicBackground) {

    return (
        <div
            className="flex-1 w-full h-full rounded-[8px] bg-[#121212] overflow-y-auto"
        >
            {children}
        </div>
    )
}
