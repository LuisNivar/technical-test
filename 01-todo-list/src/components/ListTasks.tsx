import { TaskType } from "../App";
import Item from "./Item";

type ListTaskProps = {
  tasks: TaskType[];
  onRemove: (id: TaskType["id"]) => void;
};

export function ListTasks({ tasks, onRemove }: ListTaskProps) {
  return (
    <ul>
      {tasks.map((task) => (
        <Item key={task.id} {...task} onRemove={() => onRemove(task.id)} />
      ))}
    </ul>
  );
}
