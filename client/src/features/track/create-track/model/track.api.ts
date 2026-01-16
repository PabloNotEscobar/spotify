import $api, {$authApi, API_URL} from "@/shared/api/axios";
import {trackRoutes} from "@/shared/api/routes";

export class TrackApi {
    static async create (formData: FormData) {

        await $api.post(
            trackRoutes.createTrack,
                formData
            )
        return
    }
}