
export default function AboutHero() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="md:w-[clamp(400px,50vw,800px)] flex items-center justify-center flex-col w-full p-4 rounded-xl gap-8"
            >
                <h1>About the TTC</h1>
                <h2 className="bg-white dark:bg-transparent">We run occasional events about 3D modeling, arduinos, web development, and everthing tech related. We also have a Creality CR10S 3D printer, which all Trinity College Students can submit prints to free of charge</h2>
                <button onClick={() => window.open("https://docs.google.com/document/d/1j4-U3CVLCPgWzYes5_Gj_b7HnfzatfMG-cb9DsN9fPM/edit?usp=sharing", "_blank")}>
                    Mandate
                </button>
            </div>
        </div>
    )
}