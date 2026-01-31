import type { Metadata } from "next";
import {Navbar, Player} from "@/widgets/navbar";
import "../../globals.css"
import {LibraryBar} from "@/widgets/library";
import {AuthProvider} from "@/features/auth/ui/AuthPrivider";
import {AdminProvider} from "@/features/auth/ui/AdminProvider";
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
      <AdminProvider>
          <AudioProvider>
              <div className="flex flex-col items-center w-full h-full p-2">
                  <Navbar/>
                  <div className="flex overflow-hidden flex-row w-full h-full">
                      {children}
                  </div>
                  <Player />
              </div>
          </AudioProvider>
      </AdminProvider>

      </body>
    </html>
  );
}
