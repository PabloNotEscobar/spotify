import $api from "@/shared/api/axios";

export class SearchApi {
    static async search (query: string) {
        const { data } = await $api.get(`search?q=${query}`)
        return data
    }
}