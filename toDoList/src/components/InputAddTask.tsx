type InputAddTaskProp = {
    setInputValue: (newValue: string) => void;
    value: string;
}

export function InputAddTask({ value, setInputValue }: InputAddTaskProp) {
    return (
        <input 
            type="text" 
            placeholder="Insira a Tarefa"
            value={value}
            onChange={(e) => setInputValue(e.target.value)}
        />
    )
}