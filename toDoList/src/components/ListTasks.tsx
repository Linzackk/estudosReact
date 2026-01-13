import { TaskProp } from "../hooks/useTasks"
import { TaskItem } from "./TaskItem";
import "../style.css"

export type TaskListProp = {
    tasks: TaskProp[];
    completeTask: (id: number) => void;
    editTask: (id: number, newName: string) => void;
    deleteTask: (id: number) => void;
    editingId: number | null;
    setEditing: (id: number | null, name: string) => void;
    newName: string;
    setNewName: (name: string) => void;
};

export function ListTasks({tasks, completeTask, editTask, deleteTask, editingId, setEditing, newName, setNewName}: TaskListProp) {
    return (
        <div className="container">
        {
            tasks.map(task => (
                <TaskItem 
                    key={task.id}
                    task={task}
                    completeTask={completeTask}
                    deleteTask={deleteTask}
                    editTask={editTask}
                    editingId={editingId}
                    setEditing={setEditing}
                    newName={newName}
                    setNewName={setNewName}
                />
            )
        )
        }    
        </div>
        )
}