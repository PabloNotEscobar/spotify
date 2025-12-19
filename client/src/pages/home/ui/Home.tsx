import {TracksPanel} from "@/widgets/trackslist";

export function HomePage () {
    return (
        <div className={"overflow-hidden flex-1 w-full h-full rounded-[8] bg-[#121212]"}>
            <div className={"overflow-hidden flex-1 w-full h-full rounded-[8] bg-[#121212] pl-7"}>
                <TracksPanel />
            </div>
        </div>
    )
}
