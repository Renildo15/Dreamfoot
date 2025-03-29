import { EditorOptions } from "@/components/Editor/EditorOptions";

export default function Editor() {
    return (
        <div className="flex h-screen items-center justify-center">
            <div className="flex flex-col gap-4 items-center justify-center border border-amber-200 p-6 w-full max-w-md rounded-lg shadow-md">
                <h1 className="text-xl font-bold">Editor</h1>
                <EditorOptions/>
            </div>
        </div>
    )
}
