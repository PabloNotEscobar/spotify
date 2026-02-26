import {TracksPanel} from "@/widgets/trackslist";
import Link from "next/link";
import {RoleWarn} from "@/widgets/role-warn/RoleWarn";

export function HomePage() {
    return (
        <div className={"w-full h-full overflow-y-auto"} >
            <div className={" flex flex-row flex-wrap h-full w-full items-start content-start "}>
                {/*<div className={'h-[100px] w-full pt-4 grid grid-cols-4 grid-rows-2 text-white mx-3 gap-4'}>*/}
                {/*    <div className={'flex justify-center items-center w-full flex-row justify-start '}>*/}
                {/*        <div className={`h-full w-full flex justify-top bg-white/8 shadow-xl border border-transparent border-white/20 rounded-[4px]`}>*/}
                {/*            <img*/}
                {/*                src={`/static/playlist/liked-songs-300.jpg`}*/}
                {/*                draggable={false}*/}
                {/*                className="rounded-[4px] h-full aspect-square"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div><div className={'flex justify-center items-center w-full flex-row justify-start '}>*/}
                {/*        <div className={`h-full w-full flex justify-top bg-white/8 shadow-xl border border-transparent border-white/20 rounded-[4]`}>*/}
                {/*            <img*/}
                {/*                src={`http://localhost:3000/static/playlist/liked-songs-64.png`}*/}
                {/*                draggable={false}*/}
                {/*                className="rounded-[4px] h-full  aspect-square"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div><div className={'flex justify-center items-center w-full flex-row justify-start '}>*/}
                {/*        <div className={`h-full w-full flex justify-top bg-white/8 shadow-xl border border-transparent border-white/20 rounded-[4]`}>*/}
                {/*            <img*/}
                {/*                src={`http://localhost:3000/static/playlist/liked-songs-64.png`}*/}
                {/*                draggable={false}*/}
                {/*                className="rounded-[4px] h-full  aspect-square"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div><div className={'flex justify-center items-center w-full flex-row justify-start '}>*/}
                {/*        <div className={`h-full w-full flex justify-top bg-white/8 shadow-xl border border-transparent border-white/20 rounded-[4]`}>*/}
                {/*            <img*/}
                {/*                src={`http://localhost:3000/static/playlist/liked-songs-64.png`}*/}
                {/*                draggable={false}*/}
                {/*                className="rounded-[4px] h-full  aspect-square"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div><div className={'flex justify-center items-center w-full flex-row justify-start '}>*/}
                {/*        <div className={`h-full w-full flex justify-top bg-white/8 shadow-xl border border-transparent border-white/20 rounded-[4]`}>*/}
                {/*            <img*/}
                {/*                src={`http://localhost:3000/static/playlist/liked-songs-64.png`}*/}
                {/*                draggable={false}*/}
                {/*                className="rounded-[4px] h-full  aspect-square"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div><div className={'flex justify-center items-center w-full flex-row justify-start '}>*/}
                {/*        <div className={`h-full w-full flex justify-top bg-white/8 shadow-xl border border-transparent border-white/20 rounded-[4]`}>*/}
                {/*            <img*/}
                {/*                src={`http://localhost:3000/static/playlist/liked-songs-64.png`}*/}
                {/*                draggable={false}*/}
                {/*                className="rounded-[4px] h-full  aspect-square"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div><div className={'flex justify-center items-center w-full flex-row justify-start '}>*/}
                {/*        <div className={`h-full w-full flex justify-top bg-white/8 shadow-xl border border-transparent border-white/20 rounded-[4]`}>*/}
                {/*            <img*/}
                {/*                src={`http://localhost:3000/static/playlist/liked-songs-64.png`}*/}
                {/*                draggable={false}*/}
                {/*                className="rounded-[4px] h-full  aspect-square"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div><div className={'flex justify-center items-center w-full flex-row justify-start '}>*/}
                {/*        <div className={`h-full w-full flex justify-top bg-white/8 shadow-xl border border-transparent border-white/20 rounded-[4]`}>*/}
                {/*            <img*/}
                {/*                src={`http://localhost:3000/static/playlist/liked-songs-64.png`}*/}
                {/*                draggable={false}*/}
                {/*                className="rounded-[4px] h-full  aspect-square"*/}
                {/*            />*/}
                {/*        </div>*/}
                {/*    </div>*/}
                {/*</div>*/}
                <RoleWarn />
                <TracksPanel/>
            </div>
        </div>
    )
}
