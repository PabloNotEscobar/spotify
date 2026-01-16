import {ITrack} from "@/entities/track";
import {IUser} from "@/entities/user";

export interface IFavoriteTrack {
    addedAt: Date,
    trackId?: number,
    track: ITrack,
    userId?: number,
    user?: IUser
}