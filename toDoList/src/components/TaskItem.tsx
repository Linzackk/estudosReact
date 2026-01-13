import { TaskProp } from "../hooks/useTasks"
import { ButtonCompleteTask } from "./ButtonCompleteTask";
import { ButtonDeleteTask } from "./ButtonDeleteTask";
import { ButtonSetEditingTask } from "./ButtonSetEditing";
import "../style.css";

type TaskListProp = {
    task: TaskProp
    completeTask: (id: number) => void;
    editTask: (id: number, newName: string) => void;
    deleteTask: (id: number) => void;
    editingId: number | null;
    setEditing: (id: number | null, name: string) => void;
    newName: string;
    setNewName: (name: string) => void;
};

export function TaskItem({task, completeTask, editTask, deleteTask, editingId, newName, setNewName, setEditing}: TaskListProp) {
    const isEditing = editingId === task.id;
    
    return (
        <div className="container">
            {isEditing ? (
                <>
                    <div className="taskName">
                        <input
                            type="text"
                            value={newName}
                            onChange={(e) => setNewName(e.target.value)}
                        />
                    </div>
                    <div className="taskActions">
                        <button onClick={() => editTask(task.id, newName)}>Salvar</button>
                        <button onClick={() => setEditing(null, "")}>Cancelar</button>
                    </div>
                </>
            ) : (
                <>
                    <div className="taskName">
                        <p className={task.complete ? "done": "pending"}>
                            {task.name}
                        </p>
                    </div>
                    <div className="taskActions">
                        <ButtonCompleteTask
                            completeTask={completeTask}
                            id={task.id}
                            complete={task.complete}
                        />
                        <ButtonSetEditingTask
                            setEditing={setEditing}
                            id={task.id}
                            name={task.name}
                        />
                        <ButtonDeleteTask
                            deleteTask={deleteTask}
                            id={task.id}
                        />
                    </div>
                </>
            )
        }
        </div>
    )
}