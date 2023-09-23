"use client"

import { BsDiscord } from "react-icons/bs";

export default function DiscordButton() {
    return (
        <button
            onClick={() => { window.open("https://discord.gg/zGvvbkBeee", "_blank") }}
            className=" flex flex-row gap-4 px-4 items-center justify-center bg-[#7289da] text-white rounded-md p-2"
        ><h2 className="hidden md:block">Join!</h2>
            <BsDiscord />
        </button>
    )
}