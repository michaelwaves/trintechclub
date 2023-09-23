import Scene from "./scene"
import Providers from "@/providers/themeProvider"
export default function Page() {
    return (
        <div className="w-full h-full">
            <Providers>
                <Scene />
            </Providers>
        </div>
    )
}