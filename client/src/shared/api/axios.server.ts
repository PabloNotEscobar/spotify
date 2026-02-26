import axios from 'axios'
import { cookies } from 'next/headers'

export async function createServerApi() {
    const cookieStore = await cookies()

    const cookieHeader = cookieStore
        .getAll()
        .map(c => `${c.name}=${c.value}`)
        .join('; ')

    return axios.create({
        baseURL: process.env.INTERNAL_API_URL,
        headers: {
            Cookie: cookieHeader,
        },
    })
}