import "./App.css";
import Item from "./components/Item";
import { useTasks } from "./hooks/useTasks";

export type TaskType = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
};

function App() {
  const { tasks, AddTask, RemoveTask } = useTasks();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const input = elements.namedItem("input");
    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input === null) return;
    if (input.value.trim() === "") return;

    AddTask(input.value);

    input.value = "";
  };

  const createHandleRemove = (id: TaskType["id"]) => () => {
    RemoveTask(id);
  };

  return (
    <main>
      <aside>
        <h1>TODO List</h1>
        <p>Add task to do that can be deleted</p>

        <form onSubmit={handleSubmit} aria-label="Add items">
          <label htmlFor="input">
            <input
              type="text"
              name="input"
              id="input"
              placeholder="Do the laundry..."
            />
          </label>
          <button>Add task</button>
        </form>
      </aside>

      <section>
        <h2>List to do...</h2>

        {tasks.length === 0 ? (
          <p>Empty list, add something...</p>
        ) : (
          <ul>
            {tasks.map((task) => (
              <Item
                key={task.id}
                {...task}
                onClick={createHandleRemove(task.id)}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
