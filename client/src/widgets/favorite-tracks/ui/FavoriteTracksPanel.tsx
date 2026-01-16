'use client'
import {GetFavoriteTracksApi} from "@/features/track/get-favorite/model/getFavoriteTracks.api";
import {useEffect, useState} from "react";
import {useUserStore} from "@/entities/user/model/user-store";
import {IFavoriteTrack} from "@/entities/favorite-track/types";
import {ToggleFavoriteTrackPlay} from "@/features/favorite-tracks/toggle-playback/ui/ToggleFavoriteTrackPlay";
import {TogglePlayerPlayButton} from "@/features/player/togglePlayback";


export function FavoriteTracksPanel () {

    const setFavoriteTracksIds = useUserStore(state => state.setFavoriteTracks)
    const [favTracks, setFavTracks] = useState<IFavoriteTrack[]>()


    useEffect(() => {
            const fetchTracks = async () => {
                try {
                    const fTracks = await GetFavoriteTracksApi.getAll()
                    const fTracksIds = fTracks.map(f =>  f.track.id)
                    if (fTracksIds)
                    setFavoriteTracksIds(fTracksIds)
                    setFavTracks(fTracks)
                } catch (e) {
                    console.log(e)
                }
            }
        fetchTracks()
    }, [])

    return (
        <div className={'w-full h-full flex flex-col overflow-y-auto'}>
            <div className={'w-full h-69 flex flex-row items-end border-b-1 border-b-black'}>
                <div className={'h-full aspect-square p-6 flex justify-center items-center rounded-[4px]'}>
                    <img
                        src={`http://localhost:3000/static/playlist/liked-songs-300.jpg`}
                        draggable={false}
                        className="rounded-[4px] w-full h-full"
                    />
                </div>
                <div className={'w-full h-full text-white flex flex-col items-start justify-end cursor-default'}>
                    <h1 className={'text-x pb-4'}>Плейлист</h1>
                    <h1 className={'text-8xl font-bold'}>Любимые треки</h1>
                    <div className={'w-full h-15'}></div>
                </div>
            </div>

            <div className={'m-6 flex flex-col box-border h-full'}>
                <div className={'h-26'}>
                    <TogglePlayerPlayButton circleDiameter={'56'} iconSize={'32'} color={'#22c55e'}/>
                </div>
                <div className={'w-full h-[2px] bg-[#1F1F1F]'}>

                </div>
                <div className={'pt-4 w-full flex-1'}>
                    {favTracks?.map(f => <ToggleFavoriteTrackPlay fTrack={f} key={f.track?.id}/>)}
                </div>
            </div>
        </div>
    )
}