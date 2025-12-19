import {ImageProps} from "@/shared/types";



export function TrackImage ({ id, imageUrl, children, className}: ImageProps ) {

    return (
        <div className={`relative w-full flex justify-center aspect-square`}>
            <img
                src={imageUrl}
                alt={String(id)}
                // fill
                className="object-cover rounded-[6px] select-none"
                key={id}
                draggable={false}
            />
            { children && <div className={`absolute inset-0 flex justify-end items-end`}>
                {children}
            </div>}

        </div>

    )
}
