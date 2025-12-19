import {IArtist} from "@/entities/artist/types/types";
import {ITrack} from "@/entities/track";

export interface IAlbum {
    id: number
    name: string
    image: string
    artist?: IArtist
    artistId: number
    tracks: ITrack[]
}
