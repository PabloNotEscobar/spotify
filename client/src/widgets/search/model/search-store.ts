import {create} from "zustand";
import {devtools} from "zustand/middleware";
import {SearchState, SearchStore} from "@/widgets/search/model/types";
import {ITrack} from "@/entities/track";


export const defaultInitState: SearchState = {
    foundTracks: []
};

export const useSearchStore = create<SearchStore>()(
    devtools(
        (set) => ({
            ...defaultInitState,

            setFoundTracks: (tracks: ITrack[]) =>
                set({ foundTracks: tracks }),

            clearSearch: () =>
                set({foundTracks: []})
        }),
        {
            name: 'Search Store', // Имя в DevTools
            store: 'search',    // опционально
        }
    )
);