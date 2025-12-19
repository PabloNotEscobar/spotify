'use client'
import './Seach.css'
import {useState} from "react";
import {AuthApi} from "@/features/auth";
import {useRouter} from "next/navigation";


export default function Page () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const router = useRouter(); // Инициализируем роутер


    const handleSend = async () => {
        console.log('тут я')
        try {
            console.log('Отправка...');
            await AuthApi.login(email, password);
            console.log('Успех, перехожу...');
            router.push('/');
        } catch (e) {
            console.error('Ошибка поймана:', e);
        }
    }

    return (
        <div className={'w-full h-full p-2 rounded-[8] flex justify-center items-center'}>
            <div className={'w-1/3 h-3/10 bg-[#121212] rounded-[8] flex flex-col justify-center items-center gap-y-5'}>
                <div className={'text-white'}>
                    Sign In
                </div>
                <div className={"search-wrapper"}>
                    <input
                        className="search-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>
                <div className={"search-wrapper"}>
                    <input
                        className="search-input"
                        placeholder="Password"
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
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
    )
}
