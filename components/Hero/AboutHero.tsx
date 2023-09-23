
export default function AboutHero() {
    return (
        <div className="w-full h-screen flex items-center justify-center">
            <div className="md:w-[clamp(400px,50vw,800px)] flex items-center justify-center flex-col w-full p-4 rounded-xl gap-8"
            >
                <h1>How it Works</h1>
                <h2 className="bg-white dark:bg-transparent">We run occasional hide and go seek games in various buildings around UofT. Join our discord for updates and in game communication.</h2>
                <button onClick={() => window.open("https://docs.google.com/document/d/1UPtbBXNE8enY6QN91mOgsXqLzuhLbFT30oLaEQFFsuQ/edit?usp=sharing", "_blank")}>
                    Rules
                </button>
            </div>
        </div>
    )
}