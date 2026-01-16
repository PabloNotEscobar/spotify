import $api from "@/shared/api/axios";
import {trackRoutes} from "@/shared/api/routes";
import {ITrack} from "@/entities/track";
import {IFavoriteTrack} from "@/entities/favorite-track/types";

export class GetFavoriteTracksApi {
    static async getAll (): Promise<IFavoriteTrack[]> {
        const { data } = await $api.get<IFavoriteTrack[]>(trackRoutes.getFavoriteTracks);
        return data
    }
}