import {ImageProps} from "@/shared/types";
import Image from "next/image";



export function TrackImage ({ id, imageUrl, children, className}: ImageProps ) {

    return (
        <div className={`relative w-full flex justify-center aspect-square`}>
            <Image
                src={'https://nowayshop.ru' + imageUrl}
                alt={String(id)}
                fill
                className="object-cover rounded-[6px] select-none"
                key={id}
                sizes="(max-width: 1024px) 178px, 195px"
                draggable={false}
            />
            { children && <div className={`absolute inset-0 flex justify-end items-end`}>
                {children}
            </div>}

        </div>

    )
}
