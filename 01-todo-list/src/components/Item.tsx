import { TaskType } from "../App";

type ItemProps = TaskType & { onRemove: () => void };
export default function Item({ text, onRemove }: ItemProps) {
  return (
    <li>
      {text}
      <button onClick={onRemove}>🗑️</button>
    </li>
  );
}
