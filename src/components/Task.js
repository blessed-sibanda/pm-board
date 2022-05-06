import "./Task.css";

export default function Task({ id, title, body, onDragStart }) {
  return (
    <div
      draggable
      onDragStart={(e) => onDragStart(e, id)}
      className="Task-wrapper"
    >
      <h3>{title}</h3>
      <p>{body}</p>
    </div>
  );
}
