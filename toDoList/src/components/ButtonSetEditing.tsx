type ButtonSetEditingTaskProp = {
    setEditing: (id: number | null, name: string) => void;
    id: number
    name: string
}

export function ButtonSetEditingTask({setEditing, id, name}: ButtonSetEditingTaskProp) {
    return (
        <button onClick={() => setEditing(id, name)}>Editar</button>
    )
}