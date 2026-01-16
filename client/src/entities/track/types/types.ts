import {IArtist} from "@/entities/artist/types/types";
import {IAlbum} from "@/entities/album/types/types";


export interface ITrack {
    id: number;
    name: string;
    artist?: IArtist
    artistId: string;
    listens: number;
    image: string;
    audio: string;
    primaryColor: string
    album?: IAlbum
    albumId?: number | null;
}