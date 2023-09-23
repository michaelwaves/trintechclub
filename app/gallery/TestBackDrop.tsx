"use client"
import { useContext } from "react"
import { CursorContext } from "@/providers/cursorProvider"
import { GalleryData } from "@/data/GalleryData"
import Image from "next/image"


export default function TestBackDrop() {
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
                    className="w-full md:w-1/2 pl-8"
                    onPointerEnter={() => setCursorType("hovered")}
                    onPointerLeave={() => setCursorType("default")}
                >{gallery.title}</h1>
                <div className="flex flex-col w-full md:w-1/2"
                    onPointerEnter={() => setCursorType("hovered")}
                    onPointerLeave={() => setCursorType("default")}>
                    {imageComponents}
                </div>
            </div>
        )
    })
    return (
        <div className="w-full h-full">

            {/* <h1>Test Gallery</h1>
            {Array(5).fill(0).map((_, index) => {
                return (
                    <div key={index} className="w-full h-screen flex items-center justify-center">
                        <h1>Success</h1>
                    </div>
                )
            }
            )} */}
            {galleryComponents}
        </div>
    )
}