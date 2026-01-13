type ButtonCompleteTaskProp = {
    completeTask: (id: number) => void;
    id: number
    complete: boolean
}

export function ButtonCompleteTask({completeTask, id, complete}: ButtonCompleteTaskProp) {
    return (
        <input className="checkbox" 
            type="checkbox"
            checked={complete}
            onChange={() => completeTask(id)}
        />
    )
}