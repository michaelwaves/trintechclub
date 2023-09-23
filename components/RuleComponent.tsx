/**
 * Description placeholder
 * @date 9/23/2023 - 10:41:18 AM
 *
 * @export
 * @param {{ text: string, right: boolean }} { text, right }
 * @returns {*}
 */
export default function RuleComponent({ text, right }: { text: string, right: boolean }) {
    return (
        <div className={`w-full h-screen flex ${right ? "justify-start" : "justify-end"} items-center`} >
            <div className="md:w-[clamp(400px,50vw,800px)] flex items-center justify-center flex-col w-full p-4 rounded-xl gap-8">
                <h2 className="bg-white dark:bg-transparent">{text}</h2>
            </div>
        </div >
    )
}

/* <div className={`md:w-[clamp(400px,50vw,800px)] justify-center w-full h-screen flex flex-row ${right ? "items-start" : "items-end"}`}> */ 