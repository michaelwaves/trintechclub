"use client"
import React, { useEffect, useState } from 'react';
import { GalleryData } from '@/data/GalleryData';
import { useContext } from 'react';
import Image from 'next/image';
import { CursorContext } from '@/providers/cursorProvider';

export default function TestGallery() {
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
                <h1 className='w-full md:w-1/2 pl-8'
                    onPointerEnter={() => setCursorType("hovered")}
                    onPointerLeave={() => setCursorType("default")}
                >{gallery.honestTitle}</h1>
                <div className="flex flex-col w-full md:w-1/2"
                    onPointerEnter={() => setCursorType("hovered")}
                    onPointerLeave={() => setCursorType("default")}>
                    {imageComponents}
                </div>
            </div>
        )
    })
    const [cursorPosition, setCursorPosition] = useState<any>({ x: 1000, y: 1000 })
    const [scrollPosition, setScrollPosition] = useState<any>(0)
    const WIDTH = 108
    useEffect(() => {
        const moveCursor3 = (e: any) => {

            setCursorPosition({
                x: e.clientX - WIDTH,
                y: e.clientY - WIDTH + scrollPosition,
            })


        }
        window.addEventListener('mousemove', moveCursor3)
        window.addEventListener('scroll', () => setScrollPosition(window.scrollY))
        return () => {
            window.removeEventListener('mousemove', moveCursor3)
            window.removeEventListener('scroll', () => setScrollPosition(window.scrollY))
        }

    })
    return (
        <div className="w-full h-full mask z-10 absolute -top-20 left-0 bg-white"
            style={{
                maskPosition: `${cursorPosition.x}px ${cursorPosition.y}px`,
                WebkitMaskPositionX: cursorPosition.x,
                WebkitMaskPositionY: cursorPosition.y,
                WebkitMaskSize: cursorType == "hovered" ? '216px' : '0px',
            }}
        >
            <div className='fixed bottom-20 left-4 hidden md:block dark:text-white text-black'
                onPointerEnter={() => setCursorType("hovered")}
                onPointerLeave={() => setCursorType("default")}
            >
                <p className='dark:text-black'>Cursorx: {cursorPosition.x}</p>
                <p className='dark:text-black'>Cursory: {cursorPosition.y}</p>
                <p className='dark:text-black'>Scroll:{scrollPosition}</p>
            </div>
            {/*             <h1>Test Gallery</h1>
            {Array(5).fill(0).map((_, index) => {
                return (
                    <div key={index} className="w-full h-screen flex items-center justify-center">
                        <h1>Test</h1>
                    </div>
                )
            }
            )} */}
            {galleryComponents}
        </div>
    )
}