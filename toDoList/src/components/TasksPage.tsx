import { useTasks } from "../hooks/useTasks"
import { ListTasks } from "./ListTasks"
import { TasksForm } from "./TasksForm"

export function TasksPage() {
    const { tasks, addTask, completeTask, editTask, deleteTask, editingId, newName, setNewName, inputValue, setInputValue, setEditing } = useTasks()
    return (
        <div className="container">
            <TasksForm
                addTask={addTask}
                inputValue={inputValue}
                setInputValue={setInputValue}
            />
            <ListTasks
                completeTask={completeTask}
                deleteTask={deleteTask}
                editTask={editTask}
                editingId={editingId}
                newName={newName}
                setEditing={setEditing}
                setNewName={setNewName}
                tasks={tasks}
            />
        </div>
    )
}