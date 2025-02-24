import "./App.css";
import { ListTasks } from "./components/ListTasks";
import { TaskForm } from "./components/TaskForm";
import { useTasks } from "./hooks/useTasks";

export type TaskType = {
  id: `${string}-${string}-${string}-${string}-${string}`;
  text: string;
};

function App() {
  const { tasks, AddTask, RemoveTask } = useTasks();

  const HandleRemove = (id: TaskType["id"]) => {
    RemoveTask(id);
  };

  return (
    <main>
      <aside>
        <h1>TODO List</h1>
        <p>Add task to do that can be deleted</p>
        <TaskForm AddTask={AddTask} />
      </aside>

      <section>
        <h2>List to do...</h2>

        {tasks.length === 0 ? (
          <p>Empty list, add something...</p>
        ) : (
          <ListTasks tasks={tasks} onRemove={HandleRemove} />
        )}
      </section>
    </main>
  );
}

export default App;
