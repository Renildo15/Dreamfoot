import { EditorOptionsButton } from "../EditorOptionsButton";

export function EditorOptions () {
    return (
        <div className="flex flex-col gap-2">
            <EditorOptionsButton buttonText="Criar Competição"/>
            <EditorOptionsButton buttonText="Criar Clube"/>
            <EditorOptionsButton buttonText="Criar Jogador"/>
            <EditorOptionsButton buttonText="Transferências"/>
        </div>
    )
}
