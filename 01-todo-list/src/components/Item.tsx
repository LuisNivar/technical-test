import { TaskType } from "../App";

type ItemProps = TaskType & { onClick: () => void };
export default function Item({ text, onClick }: ItemProps) {
  return (
    <li>
      {text}
      <button onClick={onClick}>🗑️</button>
    </li>
  );
}
