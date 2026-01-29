'use client'
import {ToggleFavoriteTrackPlay} from "@/features/favorite-tracks/toggle-playback/ui/ToggleFavoriteTrackPlay";
import {useSearchStore} from "@/widgets/search/model/search-store";
import {ToggleSearchTrackPlay} from "@/features/track";

interface SearchedItemsPanelProps {

}

export function SearchedItemsPanel () {

    const tracks = useSearchStore(state => state.foundTracks)

    return (
        <div className={'w-full h-full flex flex-col overflow-y-auto'}>
            <div className={'m-6 flex flex-col box-border h-full'}>
                <div className={'pt-4 w-full flex-1'}>
                    {tracks?.map(t => <ToggleSearchTrackPlay track={t} key={t.id}/>)}
                </div>
            </div>
        </div>
    )
}