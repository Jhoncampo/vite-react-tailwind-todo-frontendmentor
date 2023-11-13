import React from "react";
import IconCross from "./icons/IconCross";
import IconCheck from "./icons/IconCheck";

const TodoItem = React.forwardRef(({ todo, removeTodo, updateTodo, ...props }, ref) => {
    const { title, id, completed } = todo;
    return (
        <article {...props} ref={ref} className="flex gap-4 justify-center items-center border-b border-b-gray-40">
            <button
                className={` w-5 h-5 rounded-full border-2 flex-none flex justify-center items-center ${
                    completed
                        ? "  bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500"
                        : "inline-block"
                }`}
                onClick={() => updateTodo(id)}
            >
                {completed && <IconCheck />}
            </button>

            <p
                className={`text-gray-600 grow dark:text-gray-300 ${
                    completed && "line-through"
                }`}
            >
                {title}
            </p>
            <button className="flex-none" onClick={() => removeTodo(id)}>
                <IconCross />
            </button>
        </article>
    )
})

export default TodoItem;
