import {ImageProps} from "@/shared/types";



export function PlayerTrackImage ({ id, imageUrl}: ImageProps ) {

    return (
        <div className={`h-full flex justify-center aspect-square`}>
            <img
                src={`http://localhost:3000${imageUrl}`}
                alt={String(id)}
                key={id}
                draggable={false}
                className="rounded-[3px]"


            />
        </div>

    )
}
