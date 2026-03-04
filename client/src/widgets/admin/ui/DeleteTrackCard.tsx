'use client'
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {TrackApi} from "@/features/track/create-track/model/track.api";
import './Inputs.css'
import {AddImage, AddMusicFile} from "@/shared/ui/assets";
import {ArtistApi} from "@/features/artist/api/artist.api";


export function DeleteTrackCard () {

    const [id, setId] = useState<string>('')
    const [deleting, setDeleting] = useState<boolean>(false)


    const handleSend = async () => {
        try {
            if (Number(id)) {
                setDeleting(true)
                await TrackApi.delete(Number(id));
                setDeleting(false)
                alert('Трек удалён!')
            } else {
                alert('ID must be a number')
            }
        } catch (e) {
            console.error('Ошибка поймана:', e);
            setDeleting(false)
            alert('Не получилось удалить трек...')
        }
    }


    return (
        <div className={'w-full h-full p-2 flex justify-center items-center'}>
            <div className={'w-1/3 h-4/11 bg-[#121212] rounded-[8px] flex flex-col justify-center items-center gap-y-5'}>
                <div className={'text-white overflow-x-hidden'}>
                    Delete Track
                </div>
                <div className={"input-wrapper cursor-text overflow-x-hidden"}>
                    <input
                        className="input-input"
                        placeholder="Track Id"
                        value={id}
                        onChange={(e) => {setId(e.target.value)}}
                    />
                </div>
                <div className={'w-9/10 h-10 flex flex-row justify-between text-white content-center'}>
                    <div className={"h-10 w-1/7 flex justify-center content-center"}>
                    </div>
                    {
                        deleting
                            ?
                            <div className="h-6 w-6 animate-spin rounded-full border-4 border-solid border-green-500 border-t-transparent"></div>
                            :
                            <button
                                className={'h-10 w-1/7 bg-green-800 rounded-[8px] text-white cursor-pointer no-underline hover:underline overflow-x-hidden'}
                                onClick={(e) => {
                                    e.preventDefault(); // На всякий случай
                                    handleSend()
                                }
                                }
                            >
                                Delete
                            </button>
                    }
                </div>
            </div>

        </div>
    )
}

