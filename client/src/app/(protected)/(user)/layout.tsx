import type {Metadata} from "next";
import {Navbar, Player} from "@/widgets/navbar";
import "../../globals.css"
import {LibraryBar} from "@/widgets/library";
import {AuthProvider} from "@/features/auth/ui/AuthPrivider";
import {DynamicBackground} from "@/shared/ui/dynamic-background";
import {AudioProvider} from "@/shared/providers/audio-provider";


export const metadata: Metadata = {
    title: "Spotify",
    description: "next js fsd tailwind",
};

export default function RootLayout({
                                       children,
                                   }: Readonly<{
    children: React.ReactNode;
}>) {


    return (
        <html lang="en">
        <body>
        <AuthProvider>
            <AudioProvider>
                <div className="flex flex-col items-center w-full h-full p-2">
                    <Navbar/>
                    <div className="flex overflow-hidden flex-row w-full h-full">
                        <LibraryBar/>
                        <div className={"w-2 h-full cursor-grab"}></div>
                        <DynamicBackground>
                            {children}
                        </DynamicBackground>
                    </div>
                    <Player/>
                </div>
            </AudioProvider>
        </AuthProvider>

        </body>
        </html>
    );
}
