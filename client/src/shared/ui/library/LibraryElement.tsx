import Link from "next/link";

export function LibraryElement () {
    return (
        <Link href={'/collection/tracks'} >
            <div className={'w-18 h-18 flex justify-center items-center cursor-pointer rounded-[4px] hover:bg-[#1F1F1F]'}>
                <div className={`w-12 h-12 flex justify-center items-center `}>
                    <img
                        src={`http://localhost:3000/static/playlist/liked-songs-64.png`}
                        draggable={false}
                        className="rounded-[4px] w-full h-full"
                    />
                </div>
            </div>
        </Link>


    )
}