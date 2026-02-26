import $api from "@/shared/api/axios";

export class ArtistApi {
    static async create (formData: FormData) {
        const { data } = await $api.post('artists/create', formData)
        return data
    }
}