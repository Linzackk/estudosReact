import { useState } from "react"

export interface TaskProp {
    id: number,
    name: string,
    complete: boolean
}

export function useTasks() {
    const [tasks, setTasks] = useState<TaskProp[]>([]);

    const [inputValue, setInputValue] = useState("");

    function addTask(name: string) {
        const newTask: TaskProp = {
            id: Date.now(),
            name: name,
            complete: false
        };
        setTasks([...tasks, newTask])
    }

    function completeTask(id: number) {
        const completeTask = tasks.map(task => {
            if (task.id === id) {
                return {...task, complete: !task.complete};
            }
            return task;
        });

        setTasks(completeTask)
    }

    const [editingId, setEditingId] = useState<number | null>(null);
    const [newName, setNewName] = useState("");

    function setEditing(id: number | null, newName: string) {
        setNewName(newName);
        setEditingId(id);
    }

    function editTask(id: number, newName: string) {
        const editTasks = tasks.map(task => {
            if (task.id === id) {
                return { ...task, name: newName };
            }
            return task;
        });
        setTasks(editTasks);
        setEditingId(null);
        setNewName("");
    }

    function deleteTask(id: number) {
        const newTasks = tasks.filter(task => task.id !== id);
        setTasks(newTasks);
    }
    return { tasks, addTask, completeTask, editTask, deleteTask, editingId, setEditingId, newName, setNewName, inputValue, setInputValue, setEditing };
}