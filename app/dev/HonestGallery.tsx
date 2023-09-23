"use client"

import { GalleryData } from "@/data/GalleryData"
import Image from "next/image"
import { useContext, useEffect, useState } from "react"
import { CursorContext } from "@/providers/cursorProvider"
import { motion } from "framer-motion"


export default function HonestGallery() {
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
    const [cursorPosition, setCursorPosition] = useState<any>({ x: 1000, y: 1000 })
    const [scrollPosition, setScrollPosition] = useState<any>(0)
    const CURSOR_WIDTH = 108

    useEffect(() => {
        const handleScroll = () => {
            setScrollPosition(window.scrollY)
        }
        const moveCursor3 = (e: any) => {
            setCursorPosition({
                x: e.clientX - CURSOR_WIDTH,
                y: e.clientY - CURSOR_WIDTH + scrollPosition,
            });
        }
        window.addEventListener('mousemove', moveCursor3)
        window.addEventListener('scroll', handleScroll)
        return () => {
            window.removeEventListener('mousemove', moveCursor3)
            window.removeEventListener('scroll', handleScroll)
        }

    }, [])
    const variants = {
        hovered: {
            opacity: 1,
            transition: {
                duration: 0.1,
                ease: 'easeInOut',
            },
        },
        default: {
            opacity: 0,
            transition: {
                duration: 0.1,
                ease: 'easeInOut',
            },
        }
    }
    return (
        <motion.div className="w-full h-full mt-20 md:px-8 absolute top-0 left-0 z-10 mask"
            style={{
                maskPosition: `${cursorPosition.x}px ${cursorPosition.y}px`,
                WebkitMaskPositionX: cursorPosition.x,
                WebkitMaskPositionY: cursorPosition.y,
                // Rest of the styles
            }}
            animate={cursorType == "hovered" ? "hovered" : "default"}
            variants={variants}
        >
            <h1>Gallery</h1>
            {galleryComponents}
        </motion.div>
    )
}