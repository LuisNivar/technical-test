import "./App.css";
import Item from "./components/Item";
import { TaskForm } from "./components/TaskForm";
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

        <TaskForm onSubmit={handleSubmit} />
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
                onRemove={createHandleRemove(task.id)}
              />
            ))}
          </ul>
        )}
      </section>
    </main>
  );
}

export default App;
