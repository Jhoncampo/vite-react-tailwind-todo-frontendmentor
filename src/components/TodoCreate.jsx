import React, { useState } from "react";

const TodoCreate = ({ createTodo }) => {
    const [title, setTitle] = useState("")

    const handleSubmitAddTodo = (e) =>{
        e.preventDefault()
        if (!title.trim()){
            return setTitle("")
        }
        createTodo(title)
        setTitle("")
    }

    return (
        <form
            onSubmit={handleSubmitAddTodo}
            className="bg-white rounded-md overflow-hidden mt-8 py-3 flex gap-4 items-center px-4 dark:bg-gray-800 transition-all duration-1000"
        >
            <span className="rounded-full border-2 inline-block w-5 h-5"></span>
            <input
                className="w-full outline-none text-gray-400 dark:bg-gray-800 dark:text-gray-300 dark:placeholder:dark:text-gray-300 transition-all duration-1000"
                type="text"
                placeholder="Create a new todo..."
                value={title}
                onChange={(e) => setTitle(e.target.value)}
            />
        </form>
    );
};

export default TodoCreate;
