import React from "react";
import Task from "./Task";

const TaskList = props => {
  const tasks = props.tasks.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  console.log(tasks);
  return (
    <>
      <div className="active">
        <h2>To do:</h2>
        {tasks}
      </div>
      <hr />
      <div className="done">
        <h3>Done (0):</h3>
      </div>
    </>
  );
};

export default TaskList;
