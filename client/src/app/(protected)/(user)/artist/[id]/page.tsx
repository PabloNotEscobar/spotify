import { notFound } from 'next/navigation';
import {getTracks} from "@/shared/api";
import {getOneArtist, getOneTrack} from "@/shared/api/api";
import {TogglePlayerPlayButton} from "@/features/player/togglePlayback";
import {ToggleFavoriteTrackPlay} from "@/features/favorite-tracks/toggle-playback/ui/ToggleFavoriteTrackPlay";
import Link from "next/link";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const {id} = await params;
    const artist = await getOneArtist(id)


    if (!id) notFound();

    return (
        <div className={'w-full h-full flex flex-col overflow-y-auto'}>
            {
                <div className={'w-full h-69 flex flex-row items-end'}>
                    <div className={'h-full aspect-square p-6 flex justify-center items-center rounded-[4px]'}>
                        <img
                            src={`${artist.image}`}
                            alt={String(id)}
                            // fill
                            className="object-cover w-full h-full select-none shadow-[0_0_10px_7px_rgba(0,0,0,0.1)] rounded-full"
                            key={id}
                            draggable={false}
                        />
                    </div>
                    <div className={'w-full h-full text-white flex flex-col items-start justify-end cursor-default'}>
                        <h1 className={'text-x pb-4'}>Артист</h1>
                        <h1 className={'text-8xl font-bold flex items-center'}>{artist.name}</h1>
                        <Link href={`/artist/${artist?.id}`}>
                            <div className={'w-full h-15 hover:underline flex items-center'}>{artist.name}</div>
                        </Link>
                    </div>
                </div>
            }



            <div className={'m-6 flex flex-col box-border h-full'}>
                <div className={'h-26'}>
                    <TogglePlayerPlayButton circleDiameter={'56'} iconSize={'32'} color={'#22c55e'}/>
                </div>
                {/*<div className={'pt-4 w-full flex-1'}>*/}
                {/*    {favTracks?.map((f, index) => <ToggleFavoriteTrackPlay fTrack={f} key={f.track?.id} index={index}/>)}*/}
                {/*</div>*/}
            </div>
        </div>
    )
}