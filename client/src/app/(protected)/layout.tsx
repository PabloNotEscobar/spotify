import type { Metadata } from "next";
import "../globals.css"
import {Navbar, Player} from "@/widgets/navbar";
import {AuthApi} from "@/features/auth";
import {redirect} from "next/navigation";
import {LibraryBar} from "@/widgets/library";
import {AuthProvider} from "@/features/auth/ui/AuthPrivider";


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
      <AuthProvider>
          <div className="flex flex-col items-center w-full h-full p-2">
              <Navbar/>
              <div className="flex overflow-hidden flex-row w-full h-full">
                  <LibraryBar />
                  <div className={"w-2 h-full cursor-grab"}></div>
                  {children}
              </div>
              <Player />
          </div>
      </AuthProvider>

      </body>
    </html>
  );
}
