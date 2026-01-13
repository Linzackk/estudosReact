type ButtonDeleteTaskProp = {
    deleteTask: (id: number) => void;
    id: number
}

export function ButtonDeleteTask({deleteTask, id}: ButtonDeleteTaskProp) {
    return (
        <button onClick={() => deleteTask(id)}>Deletar</button>
    )
}