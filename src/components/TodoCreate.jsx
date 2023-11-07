import React from 'react'

const TodoCreate = () => {
  return (
      <form className="bg-white rounded-md overflow-hidden mt-8 py-3 flex gap-4 items-center px-4">
          <span className="rounded-full border-2 inline-block w-5 h-5"></span>
          <input
              className="w-full outline-none text-gray-400"
              type="text"
              placeholder="Create a new todo..."
          />
      </form>
  );
}

export default TodoCreate