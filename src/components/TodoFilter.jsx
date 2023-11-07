import React from 'react'

const TodoFilter = ({ changeFilter, filter }) => {
    return (
        <section className="container mx-auto">
            <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4">
                <button
                    className={`${
                        filter === "all"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilter("all")}
                >
                    All
                </button>
                <button
                    className={`${
                        filter === "active"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilter("active")}
                >
                    Active
                </button>
                <button
                    className={`${
                        filter === "completed"
                            ? "text-blue-600 hover:text-gray-400"
                            : "text-gray-400 hover:text-blue-600"
                    }`}
                    onClick={() => changeFilter("completed")}
                >
                    Completed
                </button>
            </div>
        </section>
    );
};

export default TodoFilter