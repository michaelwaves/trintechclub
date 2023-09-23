"use client"

import { GalleryData } from "@/data/GalleryData"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { CursorContext } from "@/providers/cursorProvider"
import { motion } from "framer-motion"


export default function GalleryComponents() {
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
                >{gallery.honestTitle}</h1>
                <div className="flex flex-col"
                    onPointerEnter={() => setCursorType("hovered")}
                    onPointerLeave={() => setCursorType("default")}>
                    {imageComponents}
                </div>
            </div>
        )
    })
    return (
        { galleryComponents }
    )
}