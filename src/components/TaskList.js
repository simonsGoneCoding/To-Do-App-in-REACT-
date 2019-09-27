import React from "react";
import Task from "./Task";

const TaskList = props => {
  const active = props.tasks.filter(task => task.active); //all active tasks
  const done = props.tasks.filter(task => !task.active); //all inactive

  const activeTasks = active.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  const doneTasks = done.map(task => (
    <Task
      key={task.id}
      task={task}
      delete={props.delete}
      change={props.change}
    />
  ));

  return (
    <>
      <div className="active">
        <h2>To do:</h2>
        {activeTasks.length > 0 ? activeTasks : <p>nothing at all</p>}
      </div>
      <hr />
      <div className="done">
        <h3>
          Done <em>({done.length})</em>:
        </h3>
        {done.length > 5 && (
          <span style={{ fontsize: "10px", fontWeight: "bold" }}>
            last 5 compledated tasks:
          </span>
        )}
        {doneTasks.slice(0, 5)}
      </div>
    </>
  );
};

export default TaskList;
