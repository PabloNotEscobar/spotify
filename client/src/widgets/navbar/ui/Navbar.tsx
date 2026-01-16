import {RightMenu, Search, SpotifyIcon} from "@/shared/ui/navbar";

interface Navbar {
    setFilter: () => void
}

export function Navbar ({setFilter}: Navbar) {
    return (
        <div className={"flex flex-row justify-between w-full h-13 bg-black rounded-[8] mb-2"}>
            <div className="h-full w-16 flex justify-center items-center">
                <SpotifyIcon />
            </div>
            <div className="h-full w-100 flex justify-center items-center">
                <Search setFilter={setFilter}/>
            </div>
            <div className="h-full w-50 flex justify-center items-center">
                <RightMenu />
            </div>
        </div>
    )
}