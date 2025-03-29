interface IEditorOprionsButton {
    buttonText: string;
}
export function EditorOptionsButton ({ buttonText }: IEditorOprionsButton) {
    return (
        <button className="btn btn-outline btn-accent">{buttonText}</button>
    )
}
