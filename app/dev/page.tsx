"use client"

import Image from "next/image"
import Gallery from "./Gallery"
import HonestGallery from "./HonestGallery"

export default function Page() {

    return (
        <div className="w-full h-full relative">
            <Gallery />
            <HonestGallery />
        </div>
    )
}