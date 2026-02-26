'use client'
import {SearchIcon} from "@/shared/ui/navbar/SearchIcon";
import './Search.css'
import {KeyboardEventHandler, useState} from "react";
import Interceptors from "undici-types/interceptors";
import {useRouter} from "next/navigation";

interface SearchProps {
    throttleSearch: (value: string) => void
}

export function SearchInput ({throttleSearch}: SearchProps) {

    const [search, setSearch] = useState<string>('')
    const router = useRouter()

    const onChange: KeyboardEventHandler<HTMLInputElement>  = (e) => {
        if (e.key === 'Enter' && search !== '') {
            throttleSearch(search)
            router.replace('/search');
        }
    }

    const onClick = () => {
        if (search !== '') {
            throttleSearch(search)
            router.replace('/search')
        }
    }

    return (
        <div className={"search-wrapper font-unica"}>
            <SearchIcon className="search-icon" onClick={onClick} />
            <input
                type="text"
                className="search-input"
                value={search}
                placeholder="What do you want to listen?"
                onChange={(e) => setSearch(e.target.value)}
                onKeyDown={onChange}
            />
        </div>
    )
}