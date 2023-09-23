"use client"

import { GalleryData } from "@/data/GalleryData"
import Image from "next/image"
import { useContext } from "react"
import { CursorContext } from "@/providers/cursorProvider"
export default function Gallery() {
    const [cursorType, setCursorType] = useContext<any>(CursorContext)
    const galleryComponents = GalleryData.map((gallery, index) => {
        const imageComponents = gallery.imgs.map((image, index) => {
            return (
                <Image key={index} src={image} width={500} height={500} alt={gallery.title} />
            )
        })
        return (
            <div key={index} className='w-full h-fit flex items-center mt-20 justify-between md:flex-row flex-col'

            >
                <h1
                    onPointerEnter={() => setCursorType("hovered")}


                    onPointerLeave={() => setCursorType("default")}
                >{gallery.title}</h1>
                <div className="flex flex-col"
                    onPointerEnter={() => setCursorType("hovered")}
                    onPointerLeave={() => setCursorType("default")}>
                    {imageComponents}
                </div>
            </div>
        )
    })
    return (
        <div className="w-full h-full mt-20 md:px-8">
            <h1>Gallery</h1>
            {galleryComponents}
        </div>

    )
}