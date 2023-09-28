"use client"

import LightSwitch from "./LightSwitch";
import { HeaderData } from "@/data/HeaderData";
import Link from "next/link";
import DiscordButton from "./DiscordButton";
import { AiFillHome } from "react-icons/ai";
import { useState } from "react";
import Image from "next/image";

export default function Header() {
    const [loading, setLoading] = useState(true)
    const navLinks = HeaderData.slice(1).map((link) => (
        <Link href={link.path} key={link.label} className="text-lg md:text-3xl">
            {link.label}
        </Link>
    ));

    return (
        <div data-testid="header" className="w-full h-20 fixed top-0 left-0 flex flex-row justify-between p-4 bg-white dark:bg-black z-20 items-center">
            <Link href="/" className="cursor-pointer">
                <div className="flex flex-row">
                    <Image src="/images/logo.jpg" width={100} height={100} alt="trin tech club logo" className="h-20 w-auto z-10" />
                    <Image src="/images/icon.png" width={100} height={100} alt="trin tech club logo" className="h-20 w-auto -translate-x-1"></Image>
                </div>
                <AiFillHome className="block md:hidden h-16" />
            </Link>

            <div className="flex flex-row gap-2 md:gap-4 md:p-4">
                {navLinks}
            </div>
            <div className="flex flex-row items-center justify-end mr-4 gap-2 md:gap-4">
                <DiscordButton />
                <LightSwitch />
            </div>
        </div>
    )
}