'use client'
import Link from "next/link";

interface TrackInfoHomeProps {
    trackId: string,
    artistId: string,
    name: string,
    artistName: string
}

export function TrackInfoHome ({trackId, artistId, name, artistName}: TrackInfoHomeProps) {


    return (
        <div className="relative z-2 w-full h-full flex flex-col mt-1 justify-center mb-3 text-white ">
            <span className="h-fit hover:underline">
                <Link  href={`/track/${trackId}`} className="hover:underline">{name}</Link>
            </span>
            <div className="text-gray-400 h-fit hover:underline">
                <Link  href={`/artist/${artistId}`} className="hover:underline">{artistName}</Link>
            </div>

        </div>

    )
}
