'use client'
import {useState} from "react";
import {usePathname, useRouter} from "next/navigation";
import {AuthApi} from "@/features/auth";
import Link from "next/link";
import './Inputs.css'
import {useUserStore} from "@/entities/user/model/user-store";


export function AuthCard () {

    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [username, setUsername] = useState('')
    const router = useRouter(); // Инициализируем роутер
    const location = usePathname()
    const signInPath = location === '/sign-in'
    const setUser = useUserStore(state => state.setUser)


    const handleSend = async () => {
        console.log('NEXT_PUBLIC_API_URL:', process.env.NEXT_PUBLIC_API_URL)
        console.log('API_URL:', process.env.INTERNAL_API_URL)
        try {
            if (signInPath) {
                const data = await AuthApi.login(email, password);
                setUser(data.user)
                router.push('/');
            } else {
                await AuthApi.registration(email, password, username);
                router.push('/sign-in');
            }
        } catch (e) {
            console.error('Ошибка поймана:', e);
        }
    }


    return (
        <div className={'w-full h-full p-2 flex justify-center items-center'}>
            <div className={'w-1/3 h-4/11 bg-[#121212] rounded-[8px] flex flex-col justify-center items-center gap-y-5'}>
                <div className={'text-white'}>
                    {signInPath ? "Sign In" : "Sign Up"}
                </div>
                {
                    signInPath
                        ?
                        null
                        :
                        <div className={"input-wrapper"}>
                            <input
                                className="input-input"
                                placeholder="Username"
                                value={username}
                                onChange={(e) => {setUsername(e.target.value)}}
                            />
                        </div>

                }
                <div className={"input-wrapper"}>
                    <input
                        className="input-input"
                        placeholder="Email"
                        value={email}
                        onChange={(e) => {setEmail(e.target.value)}}
                    />
                </div>
                <div className={"input-wrapper"}>
                    <input
                        className="input-input"
                        placeholder="Password"
                        type={'password'}
                        value={password}
                        onChange={(e) => {setPassword(e.target.value)}}
                    />
                </div>
                <div className={'w-9/10 h-10 flex flex-row justify-between text-white underline content-center '}>
                    <div className={"h-10 w-1/7 flex justify-center content-center"}>
                        {
                            signInPath
                                ?
                                <Link href={'/sign-up'} className={'flex justify-center content-center inline-block'}>
                                    Sign Up
                                </Link>
                                :
                                <Link href={'/sign-in'} className={'flex justify-center content-center inline-block'}>
                                    Sign In
                                </Link>
                        }

                    </div>
                    <button
                        className={'h-10 w-1/7 bg-green-800 rounded-[8px] text-white cursor-pointer'}
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