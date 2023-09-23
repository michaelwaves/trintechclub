import CustomCursor from "@/components/CustomCursor"
import Header from "@/components/Header"
import Hero from "@/components/Hero/Hero"
import HonestHero from "@/components/Hero/HonestHero"

export default function Home() {
  return (
    <main className={` flex min-h-screen flex-col items-center justify-between`}>
      <Header />
      <Hero />
      <HonestHero />
    </main>
  )
}
