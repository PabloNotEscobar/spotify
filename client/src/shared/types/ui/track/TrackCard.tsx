import {ReactNode} from "react";
import {ITrack} from "@/entities/track";

export interface ImageProps {
    id: number;
    imageUrl: string;
    children?: ReactNode;
    className?: string;
}


export interface PlayButtonCardProps {
    className?: string;
    track: ITrack
    active: ITrack | null
    play: boolean
    playHandler: () => void
}


// export interface TrackInfoProps {
//     artistName: string
//     trackName: string
//     artistLink: string
//     trackLink: string
// }
