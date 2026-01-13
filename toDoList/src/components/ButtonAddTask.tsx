export type ButtonAddTaskProp = {
    addTask: () => void;
}

export function ButtonAddTask({ addTask }: ButtonAddTaskProp) {
    
    return <button onClick={addTask}>Adicionar</button>
}