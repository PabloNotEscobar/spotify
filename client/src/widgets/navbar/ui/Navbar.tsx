import {RightMenu, SearchInput, SpotifyIcon} from "@/shared/ui/navbar";
import {SearchBar} from "@/features/search/ui/SearchBar";

interface Navbar {
    setFilter: () => void
}

export function Navbar () {
    return (
        <div className={"flex flex-row justify-between w-full h-13 bg-black rounded-[8px] mb-2"}>
            <div className="h-full w-18 flex justify-center items-center">
                <SpotifyIcon />
            </div>
            <div className="h-full w-100 flex justify-center items-center">
                <SearchBar />
            </div>
            <div className="h-full w-50 flex justify-center items-center">
                <RightMenu />
            </div>
        </div>
    )
}