import { TaskType } from "../App";

type TaskFormProps = {
  AddTask: (text: TaskType["text"]) => void;
};

export function TaskForm({ AddTask }: TaskFormProps) {
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const { elements } = e.currentTarget;
    const input = elements.namedItem("input");
    const isInput = input instanceof HTMLInputElement;

    if (!isInput || input === null) return;

    AddTask(input.value);

    input.value = "";
  };

  return (
    <form onSubmit={handleSubmit} aria-label="Add items">
      <label htmlFor="input">
        <input
          type="text"
          name="input"
          id="input"
          placeholder="Do the laundry..."
          required
        />
      </label>
      <button>Add task</button>
    </form>
  );
}
