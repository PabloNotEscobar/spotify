import { notFound } from 'next/navigation';
import {getTracks} from "@/shared/api";
import {getOneTrack} from "@/shared/api/api";
import {ToggleCardPlayButton, TogglePlayerPlayButton} from "@/features/player/togglePlayback";
import {ToggleFavoriteTrackPlay} from "@/features/favorite-tracks/toggle-playback/ui/ToggleFavoriteTrackPlay";
import Link from "next/link";

interface PageProps {
    params: Promise<{ id: string }>;
}

export default async function Page({ params }: PageProps) {
    const {id} = await params;
    const track = await getOneTrack(id)


    if (!id) notFound();

    return (
        <div className={'w-full h-full flex flex-col overflow-y-auto'}>
            {
                <div style={{
                    // Используем backgroundImage вместо background
                    backgroundImage: `linear-gradient(to bottom, ${track.primaryColor || '#121212'} 0%, #121212 160%)`,
                    backgroundAttachment: 'local'
                }} className={'flex w-full h-69 justify-center items-center'} >
                <div className={'w-full h-69 flex flex-row items-end'}>
                    <div className={'h-full aspect-square p-6 flex justify-center items-center rounded-[4px]'}>
                        <img
                                    src={`${track.image}`}
                                    alt={String(id)}
                                    // fill
                                    className="object-cover rounded-[6px] select-none shadow-[0_0_10px_7px_rgba(0,0,0,0.1)]"
                                    key={id}
                                    draggable={false}
                                />
                    </div>
                    <div className={'w-full h-full text-white flex flex-col items-start justify-end cursor-default'}>
                        <h1 className={'text-x pb-4'}>Трек</h1>
                        <h1 className={'text-8xl font-bold flex items-center'}>{track.name}</h1>
                        <Link href={`/artist/${track.artist?.id}`}>
                            <div className={'w-full h-15 hover:underline flex items-center'}>{track.artist?.name}</div>
                        </Link>
                    </div>
                </div>
                </div>
            }


            <div className={'flex flex-col box-border h-full'}  style={{
                backgroundImage: `linear-gradient(to bottom, ${track.primaryColor + '44' || '#121212'} 0%, #121212 40%)`,
                backgroundAttachment: 'local'
            }}>
                <div className={'m-6 flex flex-col box-border h-full'}>
                    <div className={'h-26'}>
                        <ToggleCardPlayButton track={track}/>
                    </div>
                    {/*<div className={'pt-4 w-full flex-1'}>*/}
                    {/*    {favTracks?.map((f, index) => <ToggleFavoriteTrackPlay fTrack={f} key={f.track?.id} index={index}/>)}*/}
                    {/*</div>*/}
                </div>
            </div>


            </div>
    )
}