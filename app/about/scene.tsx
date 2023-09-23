"use client"

import { Canvas } from '@react-three/fiber'
import { OrbitControls, ScrollControls, Scroll } from '@react-three/drei'
import { Noodle } from '@/components/Models/Noodle'
import { RulesData } from '@/data/RulesData'
import RuleComponent from '@/components/RuleComponent'
import AboutHero from '@/components/Hero/AboutHero'
import { Bandanna } from '@/components/Models/Bandanna'
export default function Scene() {

    const ruleComponents = RulesData.map((rule, index) => {
        return (
            <RuleComponent key={index} text={rule} right={index % 2 == 0} />
        )
    })
    return (
        <div className='w-screen h-[80vh] flex items-center mt-20'>
            <Canvas >
                <ScrollControls pages={7} damping={0.3} maxSpeed={100}>
                    {/* Canvas contents in here will *not* scroll, but receive useScroll! */}
                    {/* <Bandanna /> */}
                    <Noodle />
                    <Scroll>
                        {/* Canvas contents in here will scroll along */}

                    </Scroll>
                    <Scroll html>
                        {/* DOM contents in here will scroll along */}
                        <div className='w-screen scrollbar'
                        >
                            <div>
                                <AboutHero />
                            </div>
                            {ruleComponents}
                        </div>
                    </Scroll>
                </ScrollControls>
                <ambientLight />
                {/*   <pointLight position={[1, 1, 1]} /> */}
                {/*    <OrbitControls enableZoom={false} /> */}

            </Canvas>
        </div>
    )
}