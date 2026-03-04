import $api from "@/shared/api/axios";
import {trackRoutes} from "@/shared/api/routes";

export class TrackApi {
    static async create(formData: FormData) {
        await $api.post(
            '/tracks/create',
                formData
            )
        return
    }

    static async delete(id: number) {
        await $api.delete(
            `/tracks/${id}`
            )
        return
    }
}