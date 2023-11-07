import React from 'react'
import CrossIcon from './icons/CrossIcon';

const TodoItem = ({title}) => {
  return (
      <article className="flex gap-4  border-b border-b-gray-400 ">
          <button className="rounded-full border-2 flex-none inline-block w-5 h-5"></button>
          <p className="text-gray-600 grow">
              {title}
          </p>
          <button className="flex-none">
              <CrossIcon />
          </button>
      </article>
  );
}

export default TodoItem