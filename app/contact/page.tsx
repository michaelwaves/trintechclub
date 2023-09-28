"use client"
import DiscordButton from "@/components/DiscordButton"
import { useContext } from "react"
import { CursorContext } from "@/providers/cursorProvider"
import { BsInstagram } from "react-icons/bs"

export default function Page() {
    const [cursorType, setCursorType] = useContext<any>(CursorContext)
    return (
        <div className="w-full h-full mt-20 px-8">
            <div>
                <h1>Contact</h1>
                <DiscordButton />
                <div className="flex flex-row gap-2 p-4 items-center justify-center w-fit cursor-pointer hover:text-s-3 hover:dark:text-p-3"
                    onClick={() => window.open("https://www.instagram.com/trintechclub/", "_blank")}>
                    <BsInstagram className="w-12 h-12" />
                    <h2>@trintechclub</h2>
                </div>
            </div>
            <div className="mt-8 gap-4 flex flex-col">
                <h1>Contact Trinity College</h1>
                <h2>416-978-2522</h2>
                <h2>welcome@trinity.utoronto.ca</h2>
            </div>
        </div>
    )
}