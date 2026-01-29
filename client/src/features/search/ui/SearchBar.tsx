'use client'
import {SearchApi} from "@/features/search/api/seach.api";
import {SearchInput} from "@/shared/ui/navbar";
import {useCallback, useRef, useState} from "react";
import {useSearchStore} from "@/widgets/search/model/search-store";

interface SearchBarProps {

}

export function SearchBar () {

    const timer = useRef<null | NodeJS.Timeout>(null)
    const setFoundTracks = useSearchStore(state => state.setFoundTracks)

    const throttleSearch = useCallback((query: string) => {
        if (timer.current) {
            return ;
        }

        timer.current = setTimeout(async () => {
            try {
                const searchedTracks = await SearchApi.search(query)
                setFoundTracks(searchedTracks)
            } catch (e) {
                console.log(e, 'Found nothing')
            }
            timer.current = null;
        }, 2000)
    }, [setFoundTracks])

    return (
        <SearchInput throttleSearch={throttleSearch}/>
    )
}