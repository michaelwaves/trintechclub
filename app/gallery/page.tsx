import TestBackDrop from "./TestBackDrop";
import TestGallery from "./TestGallery";

export default function Page() {
    return (
        <div className="w-full h-full relative">
            <TestBackDrop />
            <TestGallery />
        </div>
    )
}