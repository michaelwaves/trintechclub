"use client"

import { useEffect, useContext } from "react"
import { motion, useMotionValue, useSpring } from "framer-motion"
import { useTheme } from "next-themes"
import { CursorContext } from "@/providers/cursorProvider"

export default function CustomCursor() {

    const { theme } = useTheme()
    const cursorState = useContext(CursorContext)
    const cursorType = cursorState[0]
    const setCursorType = cursorState[1]

    const WIDTH = 8
    const cursorX = useMotionValue(-100)
    const cursorY = useMotionValue(-100)
    const springConfig = { damping: 20, stiffness: 700, mass: 0.5 }
    const cursorXSpring = useSpring(cursorX, springConfig)
    const cursorYSpring = useSpring(cursorY, springConfig)
    useEffect(() => {
        const moveCursor = (e: any) => {
            cursorX.set(e.clientX - WIDTH)
            cursorY.set(e.clientY - WIDTH)
        }
        window.addEventListener('mousemove', moveCursor)
        return () => {
            window.removeEventListener('mousemove', moveCursor)
        }
    }, [])


    const hoverVariants = {
        hovered: {
            scale: 16,
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
            opacity: 1,
            mixBlendMode: 'difference',
            background: 'white'
        },
        hoverSmall: {
            scale: 1,
            border: theme == "dark" ? '8px solid rgb(242, 102, 0)' : '8px solid rgb(0, 109, 189)',
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
            opacity: 1,
        },
        default: {
            scale: 2,
            border: theme == "dark" ? '4px solid rgb(242, 102, 0)' : '4px solid rgb(0, 109, 189)',
            transition: {
                duration: 0.2,
                ease: 'easeInOut',
            },
            opacity: 1,
        },
    }


    return (
        <motion.div
            variants={hoverVariants as any}
            animate={cursorType}
            className="sm:block hidden fixed left-0 top-0 w-4 h-4 border-[4px] rounded-full pointer-events-none z-50"
            style={{
                translateX: cursorX,
                translateY: cursorY,
            }}>

        </motion.div>
    )
}