import {LibraryElement} from "@/shared/ui/library/LibraryElement";

export function LibraryBar () {
    return (
        <div className={'w-18 h-full rounded-[8px] bg-[#121212] flex flex-col items-center'}>
            <LibraryElement />
        </div>
    )
}