import CrossIcon from "./components/icons/CrossIcon";
import MoonIcon from "./components/icons/MoonIcon";

const App = () => {
    return (
        <div className=" bg-gray-300 bg-[url('./assets/images/bg-mobile-light.jpg')] bg-no-repeat bg-contain min-h-screen ">
            <header className="container mx-auto px-4 pt-8">
                <div className="container flex justify-between">
                    <h1 className="uppercase text-white text-3xl font-bold tracking-[0.3em]">
                        Todo
                    </h1>
                    <button>
                        <MoonIcon className="fill-red-500"/>
                    </button>
                </div>
                <form className="bg-white rounded-md overflow-hidden mt-8 py-3 flex gap-4 items-center px-4">
                    <span className="rounded-full border-2 inline-block w-5 h-5"></span>
                    <input
                        className="w-full outline-none text-gray-400"
                        type="text"
                        placeholder="Create a new todo..."
                    />
                </form>
            </header>
            <main className="container mt-8  mx-auto px-4">
                <div className="bg-white rounded-md [&>article]:p-4">
                    <article className="flex gap-4  border-b border-b-gray-400 ">
                        <button className="rounded-full border-2 flex-none inline-block w-5 h-5"></button>
                        <p className="text-gray-600 grow">
                            Complete online javascript curse in bluuwe
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4  border-b border-b-gray-400 ">
                        <button className="rounded-full border-2 flex-none inline-block w-5 h-5"></button>
                        <p className="text-gray-600 grow">
                            Complete online javascript curse in bluuwe
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>
                    <article className="flex gap-4  border-b border-b-gray-400 ">
                        <button className="rounded-full border-2 flex-none inline-block w-5 h-5"></button>
                        <p className="text-gray-600 grow">
                            Complete online javascript curse in bluuwe
                        </p>
                        <button className="flex-none">
                            <CrossIcon />
                        </button>
                    </article>

                    <section className=" py-4 px-4 flex justify-between">
                        <span className="text-gray-400">5 item left</span>
                        <button className="text-gray-400">
                            Clear completed
                        </button>
                    </section>
                </div>
            </main>
            <section className="container mx-auto px-4">
                <div className="bg-white mt-8 p-4 rounded-md flex justify-center gap-4">
                    <button className="text-blue-600">All</button>
                    <button className="hover:text-blue-600">Active</button>
                    <button className="hover:text-blue-600">Completed</button>
                </div>
            </section>
            <section className="text-center">
                Drag and drop to reorder list
            </section>
        </div>
    );
};

export default App;
