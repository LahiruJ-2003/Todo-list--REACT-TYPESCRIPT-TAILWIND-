import { Todo } from "../types/todo";
interface TodoItemProps {
    todo: Todo;
    onCompletedChange: (id: number, completed: boolean) => void;
}
export default function TodoItem({todo, onCompletedChange}: TodoItemProps) {
    return(
        <div>
            <label className="flex items-center  border rounded-md p-2 border-black-400 bg-white hover:bg-green-5w0">
                <input 
                type="checkbox"
                checked={todo.completed}
                onChange={(e) => onCompletedChange(todo.id, e.target.checked)}
                className="scale-125"/>
                <span className={todo.completed ? 'line-through text-gray-400' : ''}>
                {todo.title}
                </span>
            </label>
        </div>
    )
}