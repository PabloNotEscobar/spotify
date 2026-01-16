import $api from "@/shared/api/axios";
import {trackRoutes} from "@/shared/api/routes";

export class LikeTrackApi {
    static async like(trackId: number) {
        await $api.post(
            trackRoutes.likeTrack,
            {trackId}
        )
        return
    }

    static async dislike(trackId: number) {
        await $api.delete(
            trackRoutes.dislikeTrack + `/${trackId}`
        )
        return
    }
}