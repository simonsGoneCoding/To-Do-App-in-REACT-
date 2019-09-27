import React from "react";

const Task = props => {
  const { text, date, id } = props.task;
  return (
    <div>
      <p>
        <strong>{text}</strong> - until <span>{date} </span>
        <button onClick={() => props.change(id)}>Done</button>
        <button onClick={() => props.delete(id)}>X</button>
      </p>
    </div>
  );
};

export default Task;
