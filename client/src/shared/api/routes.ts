export const authRoutes = {
    getTracks: "http://backend:4000/tracks?take=1000",
    createTrack: "http://localhost:3000/tracks",
    searchTrack: "http://localhost:3000/tracks/search",
    getOneTrack: "http://localhost:3000/tracks",
}


export const trackRoutes = {
    createTrack: "http://localhost:4000/tracks/create",
    likeTrack: "http://localhost:3000/favorite-tracks/add",
    dislikeTrack: "http://localhost:3000/favorite-tracks/delete",
    getFavoriteTracks: "http://localhost:3000/favorite-tracks",
}
