import TodoCreate from "./components/TodoCreate";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    {
        id: 1,
        title: "Complete online Javascript bluuweb Curse",
        completed: true,
    },
    {
        id: 2,
        title: "Go to the gym",
        completed: false,
    },
    {
        id: 3,
        title: "10 minutes meditation",
        completed: false,
    },
    {
        id: 4,
        title: "Pick up groceries",
        completed: true,
    },
    {
        id: 5,
        title: "Complete todo app on Frontend Mentor",
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false
        }
        setTodos([...todos, newTodo])
    }
    const removeTodo = (id) =>{
        setTodos(todos.filter((todo) => todo.id !== id))
    }
    const updateTodo = (id) =>{
        setTodos(todos.map((todo) => todo.id === id ? {...todo, completed: !todo.completed}: todo))
    }
    const computedItemsLeft = todos.filter((todo) => !todo.completed).length
    const clearCompeted = ()=>{
        setTodos(todos.filter((todo) => !todo.completed));
    }

    const [filter, setFilter] = useState('all')

    const changeFilter = (filter) => setFilter(filter)

    const filterTodos = () =>{
        switch (filter) {
            case "all":
                return todos
            case "active":
                return todos.filter((todo)=> !todo.completed)
            case "completed":
                return todos.filter((todo)=> todo.completed)
        
            default:
                return todos
        }
    }

    return (
        <div className=" bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen ">
            <Header />
            <main className="container mt-8  mx-auto px-4">
                <TodoCreate createTodo={createTodo} />
                <TodoList
                    todos={filterTodos()}
                    removeTodo={removeTodo}
                    updateTodo={updateTodo}
                />
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompeted={clearCompeted}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className=" mt-8 text-center">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
