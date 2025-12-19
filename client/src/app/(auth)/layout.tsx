import type { Metadata } from "next";
import "../globals.css"


export const metadata: Metadata = {
    title: "Spotify",
    description: "next js fsd tailwind",
};

export default async function RootLayout({
                                             children,
                                         }: Readonly<{
    children: React.ReactNode;
}>) {

    return (
        <html lang="en">
            <body>
                <div className="flex flex-col items-center w-full h-full p-2">
                    {children}
                </div>
            </body>
        </html>
    );
}
