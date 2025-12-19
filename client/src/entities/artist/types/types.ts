import {IAlbum} from "@/entities/album/types/types";
import {ITrack} from "@/entities/track";

export interface IArtist {
    id: number
    name: string
    image: string
    album?: IAlbum[]
    track?: ITrack[]
}

