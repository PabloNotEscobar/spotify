'use client'
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {TrackApi} from "@/features/track/create-track/model/track.api";
import './Inputs.css'

export function CreateTrackCard () {

    const [name, setName] = useState('')
    const [artist, setArtist] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [audio, setAudio] = useState<File | null>(null)
    const router = useRouter();


    const handleSend = async () => {
        try {
            if (image && audio) {
                const formData = new FormData()
                formData.append('name', name)
                formData.append('artistId', artist)
                formData.append('image', image)
                formData.append('audio', audio)
                await TrackApi.create(formData);
                // router.push('/');
            }
        } catch (e) {
            console.error('Ошибка поймана:', e);
        }
    }


    return (
        <div className={'w-full h-full p-2 flex justify-center items-center'}>
            <div className={'w-1/3 h-6/11 bg-[#121212] rounded-[8] flex flex-col justify-center items-center gap-y-5'}>
                <div className={'text-white'}>
                    Create Track
                </div>
                <div className={"input-wrapper"}>
                    <input
                        className="input-input"
                        placeholder="Track Name"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <div className={"input-wrapper"}>
                    <input
                        className="input-input"
                        placeholder="Artist Id"
                        value={artist}
                        onChange={(e) => {setArtist(e.target.value)}}
                    />
                </div>
                <div className={"input-wrapper cursor-pointer"}>
                    Выберите изображение
                    <input
                        type="file"
                        accept={'image/*'}
                        className={"cursor-pointer"}
                        placeholder={"Выберите изображение"}
                        onChange={(e) => {
                            if (e.target.files)
                                setImage(e.target.files[0])
                        }}
                    />
                </div>
                <div className={"input-wrapper cursor-pointer"}>
                    Выберите аудио
                    <input
                        type="file"
                        accept={'audio/*'}
                        className={'cursor-pointer'}
                        onChange={(e) => {
                            if (e.target.files)
                                setAudio(e.target.files[0])
                        }}
                    />
                </div>
                <div className={'w-9/10 h-10 flex flex-row justify-between text-white underline content-center '}>
                    <div className={"h-10 w-1/7 flex justify-center content-center"}>
                    </div>
                    <button
                        className={'h-10 w-1/7 bg-green-800 rounded-[8] text-white cursor-pointer'}
                        onClick={(e) => {
                            e.preventDefault(); // На всякий случай
                            handleSend()
                        }
                        }
                    >
                        Send
                    </button>
                </div>
            </div>

        </div>
    )
}

