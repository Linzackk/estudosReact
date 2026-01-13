import { ButtonAddTask } from "./ButtonAddTask";
import { InputAddTask } from "./InputAddTask";

type TasksFormProp = {
    addTask: (nome: string) => void;
    setInputValue: (newValue: string) => void;
    inputValue: string;
}

export function TasksForm({ addTask, setInputValue, inputValue }: TasksFormProp) {
    return (
        <>
            <InputAddTask 
                setInputValue={setInputValue}
                value={inputValue}
            />
            <ButtonAddTask 
                addTask={() => {
                    addTask(inputValue);
                    setInputValue("");
                }}
            />
        </>
    )
}
