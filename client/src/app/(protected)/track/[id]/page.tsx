import { notFound } from 'next/navigation';
import {getTracks} from "@/shared/api";
import {getOneTrack} from "@/shared/api/api";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const {id} = await params;
    const track = await getOneTrack(id)
    console.log(track)


    if (!id) notFound();

    return(
        <div className={"text-white"}>
            <div className={`relative w-full flex justify-center aspect-square`}>
                <img
                    src={`http://localhost:3000${track.picture}`}
                    alt={String(id)}
                    // fill
                    className="object-cover rounded-[6px] select-none"
                    key={id}
                    draggable={false}
                />
            </div>
        </div>
    )

}