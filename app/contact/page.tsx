"use client"
import DiscordButton from "@/components/DiscordButton"
import { useContext } from "react"
import { CursorContext } from "@/providers/cursorProvider"

export default function Page() {
    const [cursorType, setCursorType] = useContext<any>(CursorContext)
    return (
        <div className="w-full h-full mt-20 px-8">
            <div>
                <h1>Contact</h1>
                <DiscordButton />
            </div>
            <div className="mt-8 gap-4 flex flex-col">

                <h1>Complaints</h1>
                <button
                    onClick={() => { window.open("https://skule.ca/wp-content/uploads/Policy-on-Complaints.pdf", "_blank") }}>
                    Skule Complaints Policy
                </button>
                <h2>Ombudsperson email:</h2>
                <h2 className="dark:text-p-3 text-s-3 underline cursor-pointer"
                    onClick={() => { window.open("mailto:ombudsperson@g.skule.ca", "_blank") }}
                    onPointerEnter={() => setCursorType("hovered")}
                    onPointerLeave={() => setCursorType("default")}
                >ombudsperson@g.skule.ca</h2>
            </div>
        </div>
    )
}