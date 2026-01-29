import $api from "@/shared/api/axios";
import {trackRoutes} from "@/shared/api/routes";

export class LikeTrackApi {
    static async like(trackId: number) {
        await $api.post(
            '/favorite-tracks/add',
            {trackId}
        )
        return
    }

    static async dislike(trackId: number) {
        await $api.delete(
            '/favorite-tracks/delete' + `/${trackId}`
        )
        return
    }
}