import LightSwitch from "./LightSwitch";
import { HeaderData } from "@/data/HeaderData";
import Link from "next/link";
import DiscordButton from "./DiscordButton";
import Image from "next/image";

export default function Header() {
    const navLinks = HeaderData.slice(1).map((link) => (
        <Link href={link.path} key={link.label}>
            {link.label}
        </Link>
    ));

    return (
        <div className="w-full h-20 fixed top-0 left-0 flex flex-row justify-between p-4 bg-white dark:bg-black z-20">
            <Link href="/" className="cursor-pointer">
                <Image src="/ttc.png" alt="Logo of the Trin Tech Club, letters TTC" width={500} height={40} className="h-20 w-auto" />
            </Link>
            <div className="flex flex-row gap-2 md:gap-4 p-4">
                {navLinks}
            </div>
            <div className="flex flex-row items-center justify-end mr-4 gap-4">
                <DiscordButton />
                <LightSwitch />
            </div>
        </div>
    )
}