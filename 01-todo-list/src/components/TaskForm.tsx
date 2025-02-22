type TaskFormProps = {
  onSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
};

export function TaskForm({ onSubmit }: TaskFormProps) {
  return (
    <form onSubmit={onSubmit} aria-label="Add items">
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
