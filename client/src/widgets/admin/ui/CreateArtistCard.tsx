'use client'
import React, {useState} from "react";
import {useRouter} from "next/navigation";
import {TrackApi} from "@/features/track/create-track/model/track.api";
import './Inputs.css'
import {AddImage, AddMusicFile} from "@/shared/ui/assets";
import {ArtistApi} from "@/features/artist/api/artist.api";


export function CreateArtistCard () {

    const [name, setName] = useState('')
    const [image, setImage] = useState<File | null>(null)
    const [creating, setCreating] = useState<boolean>(false)


    const handleSend = async () => {
        try {
            if (image) {
                const formData = new FormData()
                formData.append('name', name)
                formData.append('image', image)
                setCreating(true)
                await ArtistApi.create(formData);
                setCreating(false)
                alert('Артист добавлен!')
            }
        } catch (e) {
            console.error('Ошибка поймана:', e);
            setCreating(false)
            alert('Не получилось добавить артиста...')
        }
    }


    return (
        <div className={'w-full h-full p-2 flex justify-center items-center'}>
            <div className={'w-1/3 h-4/11 bg-[#121212] rounded-[8px] flex flex-col justify-center items-center gap-y-5'}>
                <div className={'text-white overflow-x-hidden'}>
                    Create Artist
                </div>
                <div className={"input-wrapper cursor-text overflow-x-hidden"}>
                    <input
                        className="input-input"
                        placeholder="Artist Name"
                        value={name}
                        onChange={(e) => {setName(e.target.value)}}
                    />
                </div>
                <label className={"input-wrapper cursor-pointer gap-x-3"} htmlFor="image-upload">
                    <AddImage />
                    <h4 className={'text-[#B3B3B3] text-[14px] overflow-x-hidden'}>
                        {image ? image.name : 'Выберите изображение'}
                    </h4>
                    <input
                        type="file"
                        accept={'image/*'}
                        className={"cursor-pointer hidden"}
                        placeholder={"Выберите изображение"}
                        id="image-upload"
                        onChange={(e) => {
                            if (e.target.files)
                                setImage(e.target.files[0])
                        }}
                    />
                </label>
                <div className={'w-9/10 h-10 flex flex-row justify-between text-white content-center'}>
                    <div className={"h-10 w-1/7 flex justify-center content-center"}>
                    </div>
                    {
                        creating
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
                                Create
                            </button>
                    }
                </div>
            </div>

        </div>
    )
}

