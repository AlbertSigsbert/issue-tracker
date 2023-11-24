import type { Metadata } from "next";

//components
import NavBar from "./_components/NavBar";
import { Toaster } from "@/components/ui/toaster"

//css & fonts
import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Issuez",
  description: "Issuez is a Nextjs powered app for users to post various issues",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <NavBar />
        <main className="mx-[6%]">{children}</main>
        <Toaster />
      </body>
    </html>
  );
}
