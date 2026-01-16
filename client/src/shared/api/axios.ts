import axios from 'axios'
import {IAuthResponse} from "@/features/auth";
import process from "node:process";

export const API_URL = String(process.env.API_URL)
export const API_URL_CLIENT = String(process.env.API_URL_CLIENT)

const $api = axios.create({
    withCredentials: true,
    baseURL: API_URL
})


export const $authApi = axios.create({
    baseURL: API_URL
})

$authApi.interceptors.request.use((config) => {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${localStorage?.getItem('token')}`
    return config
})

$api.interceptors.request.use((config) => {
    config.headers = config.headers ?? {}
    config.headers.Authorization = `Bearer ${localStorage?.getItem('token')}`
    return config
})

$api.interceptors.response.use((config) => {
    return config
}, async (error) => {
    const originalRequest = error.config
    if (error.response?.status === 401 && error.config && !error.config._isRetry) {
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