import TodoCreate from "./components/TodoCreate";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";
import { useState } from "react";

const initialStateTodos = [
    {
        id: new Date(),
        title: "Complete online Javascript bluuweb Curse",
        completed: true,
    },
    {
        id: new Date(),
        title: "Go to the gym",
        completed: false,
    },
    {
        id: new Date(),
        title: "10 minutes meditation",
        completed: false,
    },
    {
        id: new Date(),
        title: "Pick up groceries",
        completed: false,
    },
    {
        id: new Date(),
        title: "Complete todo app on Frontend Mentor",
        completed: false,
    },
];

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);
    return (
        <div className=" bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen ">
            <Header />
            <main className="container mt-8  mx-auto px-4">
                <TodoCreate />
                <TodoList todos={todos}/>
                <TodoComputed />
                <TodoFilter />
            </main>

            <footer className=" mt-8 text-center">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
