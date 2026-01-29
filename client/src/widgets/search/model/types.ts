import {ITrack} from "@/entities/track";

export type SearchState = {
    foundTracks: ITrack[] | null
}


export type SearchActions = {
    setFoundTracks: (tracks: ITrack[]) => void
    clearSearch: () => void
}


export type SearchStore = SearchState & SearchActions