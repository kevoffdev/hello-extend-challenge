"use client";

import Link from "next/link";

import "./globals.css";

import FavoriteProvider from "./favorites-provider";
import {Search} from "./ui/components/Search";
import {FavoritesDogs} from "./ui/components/FavoritesDogs";

import {HeartIcon} from "@/assets/icons";

interface Props {
  children: React.ReactNode;
}

function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <html lang="en">
      <body className="m-auto grid min-h-screen max-w-5xl grid-rows-[auto,1fr,auto] px-4 font-sans antialiased">
        <header className="mt-6 flex items-center justify-between text-2xl font-bold leading-[4rem]">
          <Link href="/">Dog Breeds</Link>
          <Link href="#favorites">
            <HeartIcon color="red" />
          </Link>
        </header>
        <main>
          <Search />
          {children}
          <hr className="h-0.5 bg-gray-500" />
          <FavoritesDogs />
        </main>
        <footer className="text-center leading-[4rem] opacity-60">
          By ©Kevoff {new Date().getFullYear()}
        </footer>
      </body>
    </html>
  );
}

export default function RootLayoutContainer(props: Props) {
  return (
    <FavoriteProvider>
      <RootLayout {...props} />
    </FavoriteProvider>
  );
}
