import { DragDropContext } from "@hello-pangea/dnd";

import React from "react";
import { useEffect, useState } from "react";
import TodoCreate from "./components/TodoCreate";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import TodoComputed from "./components/TodoComputed";
import TodoFilter from "./components/TodoFilter";

const initialStateTodos = JSON.parse(localStorage.getItem("todos")) || [];

const reorder = (list, startIndex, endIndex) => {
    const result = [...list];
    const [removed] = result.splice(startIndex, 1);
    result.splice(endIndex, 0, removed);
    return result;
};

const App = () => {
    const [todos, setTodos] = useState(initialStateTodos);

    useEffect(() => {
        localStorage.setItem("todos", JSON.stringify(todos));
    }, [todos]);

    const createTodo = (title) => {
        const newTodo = {
            id: Date.now(),
            title: title.trim(),
            completed: false,
        };
        setTodos([...todos, newTodo]);
    };
    const removeTodo = (id) => {
        try {
            setTodos(todos.filter((todo) => todo.id !== id));
        } catch (error) {
            console.log(error);
        }
    };
    const updateTodo = (id) => {
        try {
            setTodos(
                todos.map((todo) =>
                    todo.id === id
                        ? { ...todo, completed: !todo.completed }
                        : todo
                )
            );
        } catch (error) {
            console.log(error);
        }
    };

    const computedItemsLeft = todos.filter((todo) => !todo.completed).length;

    const clearCompeted = () => {
        try {
            setTodos(todos.filter((todo) => !todo.completed));
        } catch (error) {
            console.log(error);
        }
    };

    const [filter, setFilter] = useState("all");

    const changeFilter = (filter) => setFilter(filter);

    const filterTodos = () => {
        try {
            switch (filter) {
                case "all":
                    return todos;
                case "active":
                    return todos.filter((todo) => !todo.completed);
                case "completed":
                    return todos.filter((todo) => todo.completed);

                default:
                    return todos;
            }
        } catch (error) {
            console.log(error);
        }
    };

    const handleDragEnd = (result) => {
        const { destination, source } = result
        if(!destination) return
        if(
            source.index === destination.index && source.droppableId === destination.droppableId
        )
        return

        setTodos((prevTasks)=> reorder(prevTasks, source.index, destination.index))
    };

    return (
        <div className=" bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen dark:bg-gray-900 dark:bg-[url('./assets/images/bg-mobile-dark.jpg')] transition-all duration-1000 md:bg-[url('./assets/images/bg-desktop-light.jpg')] dark:md:bg-[url('./assets/images/bg-desktop-dark.jpg')]">
            <Header />
            <main className="container mt-8  mx-auto px-4 md:max-w-xl">
                <TodoCreate createTodo={createTodo} />
                <DragDropContext onDragEnd={handleDragEnd}>
                    <TodoList
                        todos={filterTodos()}
                        removeTodo={removeTodo}
                        updateTodo={updateTodo}
                    />
                </DragDropContext>
                <TodoComputed
                    computedItemsLeft={computedItemsLeft}
                    clearCompeted={clearCompeted}
                />
                <TodoFilter changeFilter={changeFilter} filter={filter} />
            </main>

            <footer className=" mt-8 text-center dark:text-gray-400 transition-all duration-1000">
                Drag and drop to reorder list
            </footer>
        </div>
    );
};

export default App;
