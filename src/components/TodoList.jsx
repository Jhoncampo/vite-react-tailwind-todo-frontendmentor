import React from 'react'
import TodoItem from './TodoItem';

const TodoList = ({todos}) => {
  return (
      <div className="bg-white rounded-t-md [&>article]:p-4 mt-8">
          {
            todos.map((todo)=>(
                <TodoItem key={todo.id} title={todo.title}/>
            ))
          }
      </div>
  );
}

export default TodoList