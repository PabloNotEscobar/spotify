const isServer = typeof window === 'undefined'


export const ENV = {
    API_URL: process.env.NEXT_PUBLIC_API || 'http://localhost/api',

    INTERNAL_API: process.env.INTERNAL_API || 'http://backend:4000',

    get apiUrl (){
        return isServer ? this.INTERNAL_API : this.API_URL
    }
} as const

