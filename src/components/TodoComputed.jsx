import React from 'react'

const TodoComputed = ({ computedItemsLeft, clearCompeted }) => {
    return (
        <section className=" py-4 px-4 flex justify-between bg-white rounded-b-md">
            <span className="text-gray-400">{computedItemsLeft} item left</span>
            <button className="text-gray-400" onClick={clearCompeted}>
                Clear completed
            </button>
        </section>
    );
};

export default TodoComputed