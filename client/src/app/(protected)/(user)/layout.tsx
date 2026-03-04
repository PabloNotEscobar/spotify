import type { Metadata } from 'next'
import '../../globals.css'

import { Navbar, Player } from '@/widgets/navbar'
import { LibraryBar } from '@/widgets/library'
import { DynamicBackground } from '@/shared/ui/dynamic-background'
import { AudioProvider } from '@/shared/providers/audio-provider'
import { AuthGuard } from '@/features/auth/ui/AuthGuard'

import { Supermercado_One } from 'next/font/google'
import {AuthProvider} from "@/features/auth/ui/AuthPrivider";

const unicaOne = Supermercado_One({
    subsets: ['latin'],
    variable: '--font-unica',
    weight: '400',
})

export const metadata: Metadata = {
    title: 'Spotify',
    description: 'next js fsd tailwind'

}

export default function RootLayout({
                                       children,
                                   }: {
    children: React.ReactNode
}) {
    return (
        <html lang="en" className={unicaOne.variable}>
        <body>
        <AuthProvider>
                <AudioProvider>
                    <div className="flex flex-col items-center w-full h-full p-2">
                        <Navbar />
                        <div className="flex overflow-hidden flex-row w-full h-full">
                            <LibraryBar />
                            <div className="w-2 h-full cursor-grab" />
                            <DynamicBackground>{children}</DynamicBackground>
                        </div>

                        <Player />
                    </div>
                </AudioProvider>
        </AuthProvider>
        </body>
        </html>
    )
}
