import {RightMenu, Search, SpotifyIcon} from "@/shared/ui/navbar";


export function Navbar () {
    return (
        <div className={"flex flex-row justify-between w-full h-13 bg-black rounded-[8] mb-2"}>
            <div className="h-full w-16 flex justify-center items-center">
                <SpotifyIcon />
            </div>
            <div className="h-full w-100 flex justify-center items-center">
                <Search />
            </div>
            <div className="h-full w-50 flex justify-center items-center">
                <RightMenu />
            </div>
        </div>
    )
}