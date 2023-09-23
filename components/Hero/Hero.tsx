"use client"

import Link from "next/link"
import { BsDiscord } from "react-icons/bs"
import { useContext } from "react"
import { CursorContext } from "@/providers/cursorProvider"
import DiscordButton from "../DiscordButton"

export default function Hero() {
    const [cursorType, setCursorType] = useContext<any>(CursorContext)
    return (
        <div className="w-full h-screen bg flex items-center justify-center">
            <div className="md:w-[clamp(400px,60vw,800px)] flex items-center justify-center flex-col w-full p-4 rounded-xl gap-8">
                <div className="flex flex-col items-center"
                    onPointerEnter={() => setCursorType("hovered")}
                    onPointerLeave={() => setCursorType("default")}
                >
                    <h1>Tech for Arts & Science Students</h1>
                    <h2>Welcome to Trinity College&#39;s best Tech Club :&#41;</h2>
                </div>
                <div className="flex flex-row gap-8 justify-end items-center ">
                    <Link href="/about">Learn More</Link>
                    <DiscordButton />
                </div>
            </div>
        </div>
    )
}