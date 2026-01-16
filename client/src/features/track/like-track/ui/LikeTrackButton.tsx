'use client'
import {LikeButton} from "@/shared/ui/track/LikeButton";
import {LikeTrackApi} from "@/features/track/like-track/model/like-track.api";
import {useUserStore} from "@/entities/user/model/user-store";

interface LikeTrackButton {
    trackId: number
}

export function LikeTrackButton ({trackId}: LikeTrackButton) {

    const addToFavorite = useUserStore(state => state.addToFavoriteTracks)
    const excludeFromFavorite = useUserStore(state => state.excludeFromFavoriteTracks)
    const favorite = useUserStore(state => state.favoriteTracks)
    const isFavorite = favorite.includes(trackId)
    console.log(favorite)
    console.log(isFavorite)

    const onClick = async () => {
        try {
            if (isFavorite) {
                await LikeTrackApi.dislike(trackId)
                excludeFromFavorite(trackId)
            } else {
                await LikeTrackApi.like(trackId)
                addToFavorite(trackId)
            }
        } catch (e) {
            console.log('Мы не смогли добавить трек в любимые, произошла ошибка')
        }
    }

    return (
        <LikeButton onClick={onClick} isFavorite={isFavorite}/>
    )
}