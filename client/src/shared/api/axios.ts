import axios from 'axios'
import {IAuthResponse} from "@/features/auth";

const isServer = typeof window === 'undefined'

const API_URL = isServer
    ? process.env.INTERNAL_API_URL  // Внутренний (Docker)
    : process.env.NEXT_PUBLIC_API_URL // Внешний (Браузер)

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL

})


// export const $authApi = axios.create({
//     baseURL: API_URL
// })
//
//
// $authApi.interceptors.request.use((config) => {
//     config.headers = config.headers ?? {}
//     config.headers.Authorization = `Bearer ${localStorage?.getItem('token')}`
//     return config
// })


$api.interceptors.request.use((config) => {
    if (!isServer) {
        config.headers = config.headers ?? {}
        config.headers.Authorization = `Bearer ${localStorage?.getItem('token')}`
    }
    return config
})


$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && error.config && !error.config._isRetry && !isServer) {
        originalRequest._isRetry = true
        try {
            const response = await axios.get<IAuthResponse>(`${API_URL}/auth/refresh-token`, {withCredentials: true})
            localStorage.setItem('token', response.data.accessToken)
            return $api.request(originalRequest)
        } catch (e) {
        }
    }
    throw error;
})


export default $api